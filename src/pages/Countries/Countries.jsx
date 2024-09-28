import React, { useContext } from 'react'
import { CountryContext } from '../../context/CountryContext'
import CountryList from '../../components/CountryList/CountryList'
import Filter from '../../components/Filter/Filter'
import "./countries.scss"
import spinner_img from "/loader/spinner.jfif"

const Countries = () => {

  const {filteredData, loading, error} = useContext(CountryContext)

  return (
    <div>
      <div className="filter">
        <Filter />
      </div>
        <div className="countries">
          {
            error && <p>{error}</p>
          }
          {
            loading ? 
            <div className="img-container" style={{minHeight: "30vh", display: "flex", alignItems: "center", justifyContent: "center"}}>
              <img src={spinner_img} alt='spinner' />
            </div>
            :
            <CountryList countries={filteredData} />
          }
        </div>
    </div>
  )
}

export default Countries