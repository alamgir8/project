import React from 'react';
import { Link } from 'react-router-dom';
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
                    <Link to="/shop">Shop</Link>
                    <Link to="/review">Order Review</Link>
                    <Link to="/inventory">Manage Inventory</Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;