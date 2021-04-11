import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import happyImage from "../../img/giphy.gif";
import { useHistory } from 'react-router';


const Review = () => {
    const [orderPlaced, setOrderPlaced] = useState(false);
    const history = useHistory();
    const handleProceedCheckOut = () =>{
        history.push("/shipment")
    }
    document.title = 'Order Review'
   
    const [cart, setCart]= useState([]);
    const removeProduct = (productKey) => {
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }
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

   let thankYou;
   if (orderPlaced) {
    thankYou = <img src={happyImage} alt=""/>
   }
    return (
                <div className='twin-container'>
                    <div className='product-container'>
                    {
                    cart.map(pd => <ReviewItem product={pd} removeProduct={removeProduct} key={pd.key}></ReviewItem>)
                    }
                     {thankYou}
                    </div>
                   
                    <div className='cart-container'>
                        <Cart cart={cart}>
                            <button onClick={handleProceedCheckOut} className='remove-button'>Proceed CheckOut</button>
                        </Cart>

                    </div>
             </div>
    );
};

export default Review;