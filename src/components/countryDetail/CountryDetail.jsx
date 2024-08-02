import CountryData from "../countryData/CountryData";

const CountryDetail = (props) => {
    const {country} = props
    // console.log("inside country details: ")
    // console.log(country);
    return (
        <div>
            <h4>Country Detail: {country.name.common}  </h4>
            <CountryData
            props = {props}>
            </CountryData>
        </div>
    );
};

export default CountryDetail;