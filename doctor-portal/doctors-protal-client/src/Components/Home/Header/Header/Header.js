import React from 'react';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navigation from '../Navigation/Navigation';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
           <Navigation/>
           <HeaderMain/>
           <BusinessInfo/>
        </div>
    );
};

export default Header;