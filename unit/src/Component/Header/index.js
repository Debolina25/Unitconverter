import React, {Component} from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import {Link} from 'react-router-dom';
import './style.css';

class Header extends Component {
    render() {
        return (
            <div className="TextColor header_fixed">
                <Navbar expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand><Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS90AafVihxcLBknXHpawVbmcmffEiY_XyuqrWI8XvILmuOjYAX" className="images"/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Link to="/" className="nav-link">Home</Link> 
                            <Link to="/frequency" className="nav-link">Frequency</Link>
                            <Link to="/voltage" className="nav-link">Voltage</Link>
                            <Link to="/length" className="nav-link">Length</Link>
                            <Link to="/temp" className="nav-link">Temperature</Link>
                            <Link to="/weight" className="nav-link">Weight</Link>
                            <Link to="/time" className="nav-link">Time</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>  
        );
    }
}
export default Header;