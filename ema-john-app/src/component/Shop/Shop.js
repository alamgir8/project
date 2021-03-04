import React, { useState } from 'react';
import fakeData from "../../fakeData";
import { addToDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import {  } from "./Shop.css";

const Shop = () => {
    const tenProduct = fakeData.slice(0, 10);
    const [products, setProducts] = useState(tenProduct)
    const [cart, setCart] = useState([]);

    const addProductHandler = (product) => {
        const newCart = [...cart, product];
        setCart(newCart)
        const sameProduct = newCart.filter(pd => pd.key === product.key);
        const count = sameProduct.length;
        addToDatabaseCart(product.key, count)
    }

    
   
    return (
        <div className='shop-container'>
           <div className='product-container'>
               {
                   products.map(pd => <Product product={pd} addProductHandler={addProductHandler} showAddToCart={true} key={pd.key}></Product>)
               }
           </div>
           <div className='cart-container'>
              <Cart cart={cart}></Cart>
           </div>
        </div>
    );
};

export default Shop;