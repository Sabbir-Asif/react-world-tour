import { useState } from "react";
import "./Country.css"
import CountryDetail from "../countryDetail/CountryDetail";

const Country = ({country, handleVisitedCountries}) => {
    const [visited, setVisited] = useState(false)

    const handleVisited = () => {
        setVisited(!visited);
    }

    return (
        <div className={`country ${visited? 'visited' : 'non-visited'}`}>
            Name: {country?.name.common} <br />
            <img src={country.flags.png} alt="" />
            <p>Population: {country.population}</p>
            <p>Area: {country.area} </p>
            <p><small>Code: {country.cca3} </small></p>
            {visited? 'I have visited this country' : 'I want to visit this country'} <br />
            <button onClick={handleVisitedCountries}>Mark Visited</button> <br />
            <button onClick={handleVisited}>{visited? 'Visited' : 'Going'}</button>
            <hr />
            <CountryDetail
                country = {country}
                handleVisitedCountries = {handleVisitedCountries}>
            </CountryDetail>
        </div>
    );
};

export default Country;