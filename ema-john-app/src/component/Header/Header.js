import React from 'react';
import logo  from "../../img/logo.png";
import {  } from "./Header.css";

const Header = () => {
    return (
        <header className='header'>
            <nav className='navbar'>
                <div className='nav-image'>
                     <img src={logo} alt=""/>
                </div>
                <div className='nav-link'>
                    <a href="/shop">Shop</a>
                    <a href="/order-review">Order Review</a>
                    <a href="/manage-inventory">Manage Inventory</a>
                </div>
            </nav>
        </header>
    );
};

export default Header;