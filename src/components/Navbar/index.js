import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';
import Logo from '../../img/logo/vkbe-finallogo-02.png';
import './style.css';

const NavigationBar = () => {
  return (
    <React.Fragment>
        <Navbar collapseOnSelect fixed='top' variant='dark' expand='lg' id='navigationBar'>
          <Navbar.Brand as={Link}
            activeClass='active'
            to='main'
            spy={true}
            smooth={true}
            offset={-70}
            duration= {500}>
            <img
              alt='logo'
              src={Logo}
              width='100'
              height='30'
              className='navbar-brand ml-5'
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='nav ml-auto mr-5'>
              <Nav.Link>
                <Link 
                  activeClass='active'
                  to='about'
                  spy={true}
                  smooth={true}
                  offset={-145}
                  duration= {500}
                  >About
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link 
                  activeClass='active'
                  to='services'
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration= {500}
                  >Services
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link 
                  activeClass='active'
                  to='team'
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration= {500}
                  >Team
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link 
                  activeClass='active'
                  to='testimonial'
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration= {500}
                  >Testimonials
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  activeClass='active'
                  to='contact'
                  spy={true}
                  smooth={true}
                  offset={-65}
                  duration= {500}
                  >Contact Us
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    </React.Fragment>
  )
}

export default NavigationBar;
