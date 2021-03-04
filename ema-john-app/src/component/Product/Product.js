import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import {  } from "./Product.css";
import { Link } from 'react-router-dom';

const Product = (props) => {
    // console.log(props);
    const {key, name, seller, price, img, stock, star} = props.product;
    return (
        <div className='product'>
            <div className='product-image'>
                <img src={img} alt=""/>
            </div>
            <div className='product-details'>
                <h3>
                    <Link to={'/product/' + key}>{name}</Link>
                </h3>
                <p>By : {seller}</p>
                <p>${price}</p>
                <p>Star : {star}</p>
                <p>Only {stock} left in stock- order soon</p>
                {props.showAddToCart && <button className='add-button' onClick={() => props.addProductHandler(props.product)}><FontAwesomeIcon icon={faShoppingCart} />  add to cart</button>}   
                {/* props.showAddToCart === true &&  it means if showAddToCart is true then this button will show otherwise will not show, it is react conditional render shortcut if, else*/}
            </div>
        </div>
    );
};

export default Product;