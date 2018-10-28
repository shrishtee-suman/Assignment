import React,{component} from 'react';
import Nav from "react-bootstrap/es/Nav";
import {NavItem,NavDropdown,MenuItem} from "react-bootstrap";
import './style.css';
import Navbar from "react-bootstrap/es/Navbar";
export class NavExample extends React.Component {

    render() {
        return (
            <div>
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#home">JABONG</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey={1} href="#">
                        Women
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                       Men
                    </NavItem>
                    <NavItem eventKey={3} href="#">
                        Kids
                    </NavItem>
                    <NavItem eventKey={4} href="#">
                        Home&Living
                    </NavItem>
                    <NavItem eventKey={5} href="#">
                        Accessories
                    </NavItem>
                    <NavDropdown eventKey={5} title="Others" id="basic-nav-dropdown">
                        <MenuItem eventKey={5.1}>Electrical Appliances</MenuItem>
                        <MenuItem eventKey={5.2}>Food Items</MenuItem>
                        <MenuItem eventKey={3.3}>Furniture</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={4.4}>Toys</MenuItem>
                    </NavDropdown>
                </Nav>
            </Navbar>
                <p className="banner">App Exclusive Offer -
                    <span className="for-banner">Download the app to get upto 70% Discount</span>

                </p>
            </div>
        );
    }
}
