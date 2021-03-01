import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import CountryCart from '../CountryCart/CountryCart';
import {  } from "./Countries.css";

const Countries = () => {

    const [Countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => 
            setCountries(data)
            )
        .catch(err =>console.log(err))

    }, []);

    const [countryCart, setCountry] = useState([]);
    const addCountryHandler = (country) =>{
        const newCountry = [...countryCart, country]
        setCountry(newCountry);
    }

    return (
        <div className="container">
           <div className="countries-container">
               {
                   Countries.map(country => <Country country={country} addCountryHandler={addCountryHandler} key={country.alpha2Code}></Country>)
               }
           </div>
           <div>
               <CountryCart countryCart={countryCart}></CountryCart>
           </div>
        </div>
    );
};

export default Countries;