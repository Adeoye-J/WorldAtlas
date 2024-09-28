import React, { useContext } from 'react'
import "./countryList.scss"
import { Link } from "react-router-dom"
import CountryItem from '../CountryItem/CountryItem'
import { CountryContext } from '../../context/CountryContext'

const CountryList = ({countries}) => {

  const {setSelectedCountry} = useContext(CountryContext)

  return (
    <div className="all-countries-container">
      <div className="all-countries-details">
        {countries.map((country, index) => (
            <Link className="link-countries" onClick={() => setSelectedCountry(country.name.common)} to={`/countries/${country.name.official}`} style={{textDecoration: "none"}}  key={index}>
                <CountryItem flag={country.flags.png} name={country.name.common} population={country.population} region={country.region} capital={country.capital} />
            </Link>
        ))}
      </div>
    </div>
  )
}

export default CountryList