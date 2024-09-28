import React, { useContext } from 'react'
import "./countryDetails.scss"
import { CountryContext } from '../../context/CountryContext'
import {FaBackward} from "react-icons/fa"
import { Link } from 'react-router-dom'

const CountryDetails = () => {

  const {countryData, selectedCountry, setSelectedCountry} = useContext(CountryContext)

  const item = countryData.find((country) => country.name.common === selectedCountry)

  const renderObject = (parameter) => {
    if (!parameter) return "Null"

    return (
      Object.entries(parameter)
        .map(([_, value]) => value.common || value.name)
        .join(", ")
    )
  }

  const renderLanguages = (languages) => {
    if (!languages) return "No languages available"

    // Get the values of the languages object and join them with commas
    return Object.values(languages).join(', ')
  }

  const renderFirstValue = (parameter) => {
    if (!parameter) return "No data available"

    // Get the first entry and return the 'common' or 'name' value
    console.log(Object.entries(parameter))
    const firstEntry = Object.entries(parameter)[0]
    console.log(firstEntry)
    return firstEntry ? firstEntry[1].common || firstEntry[1].name : "No valid value"
  }

  const renderBorders = (borderCodes) => {
    if (!borderCodes || borderCodes.length === 0) return "Null"

    const borderCountries = borderCodes.map((code) => {
      const codeData = countryData.find((data) => data.cca3 === code)
      const codeCountry = codeData ? codeData.name.common : code
      return (
        <Link to={`/countries/${codeCountry}`} onClick={() => setSelectedCountry(codeCountry)} key={code}>
          <button>
            {codeCountry}
          </button>
        </Link>
      )
    })

    return borderCountries
  }

  return (
    <div className='country-details-container'>
      <div className="navigate">
        <Link to={"/"} style={{textDecoration: "none"}}>
          <button> <FaBackward/> Back</button>
        </Link>
      </div>
      {item ? (
        <div className='item-container'>
          <div className="image-container">
            <img src={item.flags.png} alt="country-flag" />
          </div>
          <div className="country-details">
            <h1>{item.name.common}</h1>
            <div className="details">
              <ul>
                <li>Native Name: <span>{renderObject(item.name.nativeName) || "null"}</span></li>
                <li>Population: <span>{item.population || "null"}</span></li>
                <li>Region: <span>{item.region || "null"}</span></li>
                <li>Sub Region: <span>{item.subregion || "null"}</span></li>
                <li>Capital: <span>{item.capital || "null"}</span></li>
                <li>Top Level Domain: <span>{item.tld || "null"}</span></li>
                <li>Currencies: <span>{renderObject(item.currencies) || "null"}</span></li>
                <li>Languages: <span>{renderLanguages(item.languages) || "null"}</span></li>
              </ul>
            </div>
            <div className="border-countries">
              <p>Border Countries: <span>{renderBorders(item.borders)}</span></p>
            </div>
          </div>
        </div>
      ) : (
        <p>Country not found</p>
      )}
    </div>
  )
}

export default CountryDetails