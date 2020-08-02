import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUniversalAccess, faAdjust, faPlay, faUser, faSearch } from '@fortawesome/free-solid-svg-icons';

import './header.css';

class Header extends Component {

    render() {
        return (
            <Navbar className="header-content" collapseOnSelect expand="lg">
                <Navbar.Brand href="#home"><img src={`/assets/logo-sky.svg`} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link><FontAwesomeIcon icon={faUniversalAccess} /></Nav.Link>
                        <Nav.Link><FontAwesomeIcon icon={faAdjust} /></Nav.Link>
                        <Nav.Link>A-</Nav.Link>
                        <Nav.Link>A+</Nav.Link>
                        <Nav.Link className="sky-play"><FontAwesomeIcon icon={faPlay} /> Play</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link><FontAwesomeIcon icon={faUser} /> Entrar</Nav.Link>
                        <Nav.Link><FontAwesomeIcon icon={faSearch} /></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;