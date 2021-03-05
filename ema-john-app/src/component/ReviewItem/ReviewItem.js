import React from 'react';
import {  } from "./ReviewItem.css";

const ReviewItem = (props) => {
    const { name, quantity, key} = props.product;
    return (
        <div className='container my-5'>
            <h4 className='text-justify text-info'>{name}</h4>
            <h5>Quantity : {quantity}</h5>
            <button className='remove-button' onClick={() => props.removeProduct(key)}>Remove</button>
        </div>
    );
};

export default ReviewItem;