import React from 'react';
import {  } from "./Cart.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Cart = (props) => {
   const cart = props.cart;
  
//    const total = cart.reduce((total, pd) => total + pd.price, 0); //calculating by reduce method

let total = 0;
let shipping = 0;
for (let i = 0; i < cart.length; i++) {
    const product = cart[i];
    total = total + product.price;
    shipping = shipping + product.shipping;
    
}



const tax = total/10;
const grandTotal = total + shipping + tax;
    return (
        <div className='cart-container'>
            <h1>Order Summary</h1>
            <h2>Items Ordered : {cart.length}</h2>
            <div className='cart-details'>
                <div className='price'>
                    <p>Price : </p>
                    <p>${Math.round(total)}</p>
                </div>
                <div className='price'>
                    <p>Shipping : </p>
                    <p>${Math.round(shipping)}</p>
                </div>
                <div className='price'>
                    <p>Tax & VAT :</p>
                    <p>${Math.round(tax)}</p>
                </div>
                <div className='price total-price'>
                    <p>Total Price : </p>
                    <p>${Math.round(grandTotal)}</p>
                </div>
            </div>
            <Link to="/review">
                <button className='add-button'> <FontAwesomeIcon icon={faShoppingCart} />  Review your order</button>
            </Link>
        </div>
    );
};

export default Cart;