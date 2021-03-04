import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart } from '../../utilities/databaseManager';
import ReviewItem from '../ReviewItem/ReviewItem';


const Review = () => {
    const [cart, setCart]= useState([]);
    useEffect(() =>{
        //cart data
        const savedCart =  getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const productCart = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        });
        setCart(productCart);

    }, []);
    return (
        <div>
            <h2>Order Items : {cart.length}</h2>
            {
                cart.map(pd => <ReviewItem product={pd} key={pd.key}></ReviewItem>)
            }
        </div>
    );
};

export default Review;