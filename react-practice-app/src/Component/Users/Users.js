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

    const [userCart, setUserCart] = useState([]);
    const addUserHandler = (user) => {
        const newUserCart = [...userCart, user];
        setUserCart(newUserCart);

       
    }
    
    return (
        <div className="user-container">
            <div className="user-info">
                <h1>This is user Information</h1>
                {
                    fakeData.map(users => <User user={users} addUserHandler={addUserHandler} key={users.id}></User>)
                    
                }
            </div>
            <div className="user-cart">
                <UserCart userCart={userCart}></UserCart>
                
            </div>
        </div>
    );
};

export default Users;