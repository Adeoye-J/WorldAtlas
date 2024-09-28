import React, { useState, useContext } from 'react'
import { CountryContext } from '../../context/CountryContext'
import {FaSearch} from "react-icons/fa"
import "./filter.scss"

const Filter = () => {

    const {path, setPath, searchItem, setSearchItem} = useContext(CountryContext)

    const handleRegion = (e) => {
        setPath(e.target.value)
    }

    return (
        <div className='filter-container'>
            <div className="search-container">
                <input 
                    // autoFocus
                    type="text" 
                    placeholder='Search for a country...'
                    name='searchItem'
                    value={searchItem}
                    onChange={(e) => setSearchItem(e.target.value)}
                    // onKeyDown={(e) => e.key === "Enter" && handleSearch}
                />
                <FaSearch className="search-icon" />
            </div>
            <div className="dropdown-container">
                <select onChange={handleRegion} value={path}>
                    <option value="all">Filter By Region</option>
                    <option value="region/africa">Africa</option>
                    <option value="region/america">America</option>
                    <option value="region/asia">Asia</option>
                    <option value="region/europe">Europe</option>
                    <option value="region/oceania">Oceania</option>
                    <option value="region/antarctic">Antarctic</option>
                </select>
            </div>
        </div>
    )
}

export default Filter