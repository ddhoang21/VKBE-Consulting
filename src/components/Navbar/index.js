import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-scroll";
import './style.css';

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Navbar fixed="top" bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          React Bootstrap
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
