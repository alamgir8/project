import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import {  } from "./Product.css";

const Product = (props) => {
    const {name, seller, price, img, stock, star} = props.product;
    return (
        <div className='product'>
            <div className='product-image'>
                <img src={img} alt=""/>
            </div>
            <div className='product-details'>
                <h4>{name}</h4>
                <p>By : {seller}</p>
                <p>${price}</p>
                <p>Only {stock} left in stock- order soon</p>
                <button className='add-button' onClick={() => props.addProductHandler(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>
        </div>
    );
};

export default Product;