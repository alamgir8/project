import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../../App';
import './Navigation.css'

const Navigation = () => {
    const [loginUser, setLoginUser] = useContext(userContext);
    return (
        <div className="nav-section">
            <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container-fluid">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav ml-auto mb-lg-0 nav justify-content-end">
                                    <li className="nav-item pt-2">            
                                        <Link to="/home" className="nav-link mx-3 h6 nav-header"> Home </Link>
                                    </li>
                                    <li className="nav-item pt-2">
                                        <a href="#service" className="nav-link mx-3 h6 nav-header">Dental Service</a>
                                    </li>
                                    <li className="nav-item pt-2">
                                        <a href="#blog" className="nav-link mx-3 h6 nav-header">Blog</a>
                                    </li>
                                    <li className="nav-item pt-2">
                                        <a href="#footer" className="nav-link mx-3 h6 nav-header">About Us</a>
                                    </li>
                                    <li className="nav-item pt-2">
                                        <a href="#contact" className="nav-link mx-3 h6 nav-header">Contact</a>
                                    </li>
                                    <li className="nav-item pt-2">
                                        {loginUser.displayName ? <span className="nav-link active mx-3 h6 nav-header">{loginUser.displayName}</span> : <Link to="/login" className="nav-link active px-3 h6 nav-header">Login</Link>}
                                    </li>
                                </ul>
                            </div>
                        </div>
                        </nav>
               
    
            </div>
        </div>
    );
};

export default Navigation;