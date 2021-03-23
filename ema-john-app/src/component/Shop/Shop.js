import React, { useEffect, useState } from 'react';
import fakeData from "../../fakeData";
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import {  } from "./Shop.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Shop = () => {
    const tenProduct = fakeData.slice(0, 10);
    const [products, setProducts] = useState(tenProduct)
    const [cart, setCart] = useState([]);
    document.title = 'Shop'

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const previousCart = productKeys.map( pdKeys =>{
            const product = fakeData.find( pd => pd.key === pdKeys);
            product.quantity = savedCart[pdKeys];
            return product;
        })
        setCart(previousCart);
    }, [])

    const addProductHandler = (product) => {
        const toBeAddedKey = product.key;
        const sameProduct = cart.find(pd => pd.key === toBeAddedKey);

        let count = 1;
        let newCart;
        if (sameProduct) {
            count = sameProduct.quantity +1;
            sameProduct.quantity = count;

            const others = cart.filter(pd => pd.key !== toBeAddedKey);
            newCart = [...others, sameProduct];
        }
        else{
            product.quantity = 1;
            newCart = [...cart, product]
        }
        
        setCart(newCart)
        addToDatabaseCart(product.key, count)
    }

    
   
    return (
        <div className='twin-container'>
           <div className='product-container'>
               {
                   products.length === 0 && <p>Loading....</p>
               }
               {
                   products.map(pd => <Product product={pd} addProductHandler={addProductHandler} showAddToCart={true} key={pd.key}></Product>)
               }
           </div>
           <div className='cart-container'>
              <Cart cart={cart}>
              <Link to="/review">
                <button className='add-button'> <FontAwesomeIcon icon={faShoppingCart} />  Review your order</button>
            </Link>
              </Cart>
           </div>
        </div>
    );
};

export default Shop;