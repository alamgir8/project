import React, { useEffect, useState } from 'react';
import fakeData from "../../FakeData/Fakeuser.json";
import User from '../User/User';
import UserCart from '../UserCart/UserCart';
import {  } from "./Users.css";

const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        setUsers(fakeData);
    }, []);

    const {userCart, setUserCart} = useState([]);
    const addUserHandler = (user) => {
        const newUser = [...userCart, user];
        setUserCart(newUser);
        console.log('i am clicked');

    }
    return (
        <div className="user-container">
            <div className="user-info">
                <h1>This is user Information</h1>
                {
                    fakeData.map(users => <User user={users} addProductHandler={addUserHandler}></User>)
                    
                }
            </div>
            <div className="user-cart">
                <UserCart user={userCart}></UserCart>
                <h2>This is user Added section</h2>
            </div>
        </div>
    );
};

export default Users;