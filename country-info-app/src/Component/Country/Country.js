import React from 'react';
import {  } from "./Country.css";

const Country = (props) => {
    const addCountryHandler = props.addCountryHandler;
    const {flag, name, capital, population, region} = props.country;
    return (
        <div className="country-container">
            <div className="country-image">
                <img src={flag} alt=""/>
                <h4>Name : {name}</h4>
            </div>
            <div className="country-info">
                <h4>Name : {name}</h4>
                <h4>Capital : {capital}</h4>
                {/* <h4>Language : {languages}</h4> */}
                <h4>Population : {population}</h4>
                <h4>Area : {region}</h4>
            </div>
            <div>
                <button onClick={() => addCountryHandler(props.country)}>Add This Country</button>
               
            </div>
        </div>
    );
};

export default Country;