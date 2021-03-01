import React from 'react';
import {  } from "./CountryCart.css";

const CountryCart = (props) => {
   console.log(props.countryCart);
   const country = props.countryCart;
   console.log(country);

   let population = 0;
   for (let i = 0; i < country.length; i++) {
       const countryName = country[i];
       population = population + countryName.population;
       
   }
  
   

    return (
        <div className="country-cart">
            <h2>Total population : {population}</h2>
        </div>
    );
};

export default CountryCart;