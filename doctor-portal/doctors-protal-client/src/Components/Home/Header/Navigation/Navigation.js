import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const Navigation = () => {
    return (
        <Navbar expand="lg">
           
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                <Nav.Link href="#home" className='text-dark mx-4'>Home</Nav.Link>
                <Nav.Link href="#about-us" className='text-dark mx-4'>About Us</Nav.Link>
                <Nav.Link href="#dental-service" className='text-dark mx-4'>Dental Services</Nav.Link>
                <Nav.Link href="#reviews" className='text-white col-sm-text-dark mx-4'>Reviews</Nav.Link>
                <Nav.Link href="#blog" className='text-white mx-4'>Blog</Nav.Link>
                <Nav.Link href="#contact" className='text-white mx-4'>Contact</Nav.Link>
               
                </Nav>
    
            </Navbar.Collapse>
            </Navbar>
    );
};

export default Navigation;