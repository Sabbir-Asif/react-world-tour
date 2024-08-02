import { useState } from "react";
import "./Country.css"

const Country = ({country}) => {
    const [visited, setVisited] = useState(false)

    const handleVisited = () => {
        setVisited(!visited);
    }

    return (
        <div className="country">
            Name: {country?.name.common} <br />
            <img src={country.flags.png} alt="" />
            <p>Population: {country.population}</p>
            <p>Area: {country.area} </p>
            <p><small>Code: {country.cca3} </small></p>
            {visited? 'I have visited this country' : 'I want to visit this country'} <br />
            <button onClick={handleVisited}>{visited? 'Visited' : 'Going'}</button>
        </div>
    );
};

export default Country;