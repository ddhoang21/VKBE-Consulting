import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
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
      <Navbar fixed="top" bg="dark" variant="dark">
        <Navbar.Brand>
          <img
            alt="logo"
            src={Logo}
            width="100"
            height="30"
            className="d-inline-block align-top"
          />{' '}
        </Navbar.Brand>
        <Link
          activeClass="active"
          to="main"
          spy={true}
          smooth={true}
          offset={0}
          duration= {500}
          >Main
        </ Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration= {500}
          >About
        </ Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={0}
          duration= {500}
          >Contact
        </ Link>
      </Navbar>
    )
  }
}

export default NavigationBar;
