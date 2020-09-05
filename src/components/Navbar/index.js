import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-scroll";
import Logo from "../../img/logo/vkbe-finallogo-02.png";
import './style.css';

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Navbar collapseOnSelect sticky="top" variant="dark" expand="lg">
        <Navbar.Brand>
          <img
            alt="logo"
            src={Logo}
            width="100"
            height="30"
            className="navbar-brand"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link>
              <Link  
                activeClass="active"
                to="main"
                spy={true}
                smooth={true}
                offset={-70}
                duration= {500}
                >Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link 
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-190}
                duration= {500}
                >About
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link 
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                offset={-80}
                duration= {500}
                >Services
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration= {500}
                >Contact
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavigationBar;
