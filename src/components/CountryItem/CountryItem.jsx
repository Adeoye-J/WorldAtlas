import React from 'react'
import "./countryItem.scss"

const CountryItem = ({flag, name, population, region, capital}) => {
    return (
        <div className="country-container">
            <div className="img-container">
                <img src={flag} alt="country" />
            </div>

            <div className="country-details">
                <h1>{name}</h1>
                <div className="other-country-details">
                    <p>
                        Population: <span>{population}</span>
                    </p>
                    <p>
                        Region: <span>{region}</span>
                    </p>
                    <p>
                        Capital: <span>{capital}</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CountryItem
