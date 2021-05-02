import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/Logo_Short.png';
import './MyNav.css'
const MyNav = () => {
    return (
        <header className='sticky-top headerStyle'>
            <Navbar bg="" variant="light" className='styleOfNav'>
                <ul>
                    <Link className="nav-link mr-4 text-Blue" href="#home">
                        <img src={logo} className='logoImg' alt="" />
                    </Link>
                </ul>
                <Nav className="ml-auto">

                    <li className="nav-item active">
                        <a className="nav-link mr-4 text-Blue" href="#home">Home</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link  text-Blue" href="#projects">Projects</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link mr-4 text-Blue" href="#blog">Blog</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link mr-4 text-Blue" href="#about">About</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link mr-4 text-Blue" href="#contact">Contact</a>
                    </li>
                </Nav>
            </Navbar>
        </header>
    );
};

export default MyNav;