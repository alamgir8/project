import React from 'react';

const Footer = () => {
    return (
        <div id='footer' className='footer-section mt-5'>
            <footer className="bg-light text-lg-start">
                <div className="container p-4">
                    <div className="row">
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h3 className="sub-header">Doctors Portal</h3>

                        <ul className="list-unstyled my-4">
                        <li>
                            <span className='h6'>Office: </span>
                            <a href="#!" className="text-dark">North tower, Uttara-1230</a>
                        </li>
                        <li>
                        <span className='h6'>Email: </span>
                            <a href="#!" className="text-dark">ahossain38900@gmail.com</a>
                        </li>
                        <li>
                        <span className='h6'>Phone: </span>
                            <a href="#!" className="text-dark">01957930032</a>
                        </li>
                       
                        </ul>
                    </div>
            

            
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="mt-2 sub-header">Service</h5>

                        <ul className="list-unstyled my-4">
                        <li>
                            <a href="#!" className="text-dark">Dental Care</a>
                        </li>
                        <li>
                            <a href="#!" className="text-dark">Emergency Care</a>
                        </li>
                        <li>
                            <a href="#!" className="text-dark">Special Health Care</a>
                        </li>
                        <li>
                            <a href="#!" className="text-dark">Free CheckUp</a>
                        </li>
                        </ul>
                    </div>
                  
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="mt-2 sub-header">About Us</h5>

                        <ul className="list-unstyled my-4">
                        <li>
                            <a href="#!" className="text-dark">Success Story</a>
                        </li>
                        <li>
                            <a href="#!" className="text-dark">Payment Policy</a>
                        </li>
                        <li>
                            <a href="#!" className="text-dark">Term & Conditions</a>
                        </li>
                        <li>
                            <a href="#!" className="text-dark">Privacy Policy</a>
                        </li>
                        </ul>
                    </div>
                  
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="mt-2 sub-header">Our Social Media</h5>

                        <ul className="list-unstyled my-4">
                        <li>
                            <a href="#!" className="text-dark">Facebook</a>
                        </li>
                        <li>
                            <a href="#!" className="text-dark">Twitter</a>
                        </li>
                        <li>
                            <a href="#!" className="text-dark">Instagram</a>
                        </li>
                        <li>
                            <a href="#!" className="text-dark">Youtube</a>
                        </li>
                        </ul>
                    </div>
                  
                    </div>
                 
                </div>
               

                <div className="text-center p-3" >
                    © 2021 Copyright 
                    <a className="text-dark" href="#"> Doctors Portal</a>
                </div>
               
                </footer>
            
        </div>
    );
};

export default Footer;