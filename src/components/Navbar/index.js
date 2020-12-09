import React, {useState} from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';
import Logo from '../../img/logo/vkbe-finallogo-02.png';
import './style.css';

const NavigationBar = () => {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <React.Fragment>
        <Navbar collapseOnSelect expanded={expanded} fixed='top' variant='dark' expand='lg' id='navigationBar'>
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
          <Navbar.Toggle aria-controls='responsive-navbar-nav' onClick={() => setExpanded(expanded ? false : 'expanded')}/>
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
                  onClick={() => setExpanded(false)}
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
                  onClick={() => setExpanded(false)}
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
                  onClick={() => setExpanded(false)}
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
                  onClick={() => setExpanded(false)}
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
                  onClick={() => setExpanded(false)}
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
