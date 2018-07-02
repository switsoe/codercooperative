import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

const NaviBar = () => {
    return (
        <Navbar fluid="true" inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#brand">React-Bootstrap</a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                    <NavItem eventKey={1} href="#" className="links">
                        Home
      </NavItem>
                    <NavItem eventKey={2} href="#">
                        Developers
      </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NaviBar;