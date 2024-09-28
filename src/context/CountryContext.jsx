import React, { createContext, useEffect, useState } from 'react'

export const CountryContext = createContext()

export const CountryProvider = ({children}) => {

    const [countryData, setCountryData] = useState([])
    const [filteredData, setFilteredData] = useState([])
    const [selectedCountry, setSelectedCountry] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [path, setPath] = useState("all")
    const [searchItem, setSearchItem] = useState("")

    const apiUrl = `https://restcountries.com/v3.1/${path}`

    const fetchCountries = async (url) => {
        try {
            setLoading(true)
            const response = await fetch(url)
            const data = await response.json()
            setCountryData(data)
            setFilteredData(data)
        } catch (error) {
            setError(error.data)
        }

        setLoading(false)
    }

    useEffect(() => {
        fetchCountries(apiUrl)
    }, [apiUrl])

    useEffect(() => {
        let data = countryData

        if (searchItem) {
            data = data.filter((item) => item.name.common.toLowerCase().includes(searchItem.toLowerCase()))
        }
        
        setFilteredData(data)

    }, [searchItem])


    const value = {
        countryData,
        loading,
        error,
        path,
        setPath,
        searchItem, 
        setSearchItem,
        filteredData,
        selectedCountry, 
        setSelectedCountry
    }

    return (
        <CountryContext.Provider value={value}>
            {children}
        </CountryContext.Provider>
    )
}
