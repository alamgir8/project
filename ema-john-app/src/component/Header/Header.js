import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import logo  from "../../img/logo.png";
import {  } from "./Header.css";

const Header = () => {
    const [login, setLogin] = useContext(userContext);
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
                    <button onClick={() => setLogin({})}>Sign Out</button>
                </div>
            </nav>
        </header>
    );
};

export default Header;