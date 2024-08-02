import { useEffect, useState } from "react"
import Country from "./Country";
import "./Countries.css"

const Countries = () => {

    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data));
    },[])

    const handleVisitedCountries = (country) => {
        const newCountries = [...visitedCountries, country];
        setVisitedCountries(newCountries);
    }

    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            <div>
                Visited countries: {visitedCountries.length}
                {
                    visitedCountries.map(
                        visitedCountry => (
                            <li key={visitedCountry.cca3}>{visitedCountry.name.common}</li>
                        )
                    )
                }
            </div>
           <div className="country-container">
           {
                countries.map(country => (
                <Country 
                key = {country.cca3} 
                handleVisitedCountries = {() => handleVisitedCountries(country)}
                country={country}>
                </Country>
            ))
            }
           </div>
        </div>
    )
}

export default Countries;