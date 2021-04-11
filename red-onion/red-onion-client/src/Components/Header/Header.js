import React from 'react';
import { Nav, Navbar} from 'react-bootstrap';
import logo2 from '../../img/logo2.png'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg">
            <Navbar.Brand>
                <Link to='/home'>
                    <img src={logo2} alt="red-onion-logo" className='img-fluid w-25'/>
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className='text-dark'>
                <Nav.Link href="#"><ShoppingCartOutlinedIcon/></Nav.Link>
                <Nav.Link ><Link to="/admin">Admin</Link></Nav.Link>
                <Nav.Link ><Link to="/login">Login</Link></Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;