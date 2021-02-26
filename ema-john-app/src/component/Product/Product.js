import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import {  } from "./Product.css";

const Product = (props) => {
    console.log(props);
    const {name, seller, price, img, stock, star} = props.product;
    return (
        <div className='product'>
            <div className='product-image'>
                <img src={img} alt=""/>
            </div>
            <div className='product-details'>
                <h3>{name}</h3>
                <p>By : {seller}</p>
                <p>${price}</p>
                <p>Star : {star}</p>
                <p>Only {stock} left in stock- order soon</p>
                <button className='add-button' onClick={() => props.addProductHandler(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>
        </div>
    );
};

export default Product;