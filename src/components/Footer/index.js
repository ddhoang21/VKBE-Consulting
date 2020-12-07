import React from 'react';
import './style.css';
import { Container, Row, Col, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGoogle } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <React.Fragment>
            <footer className="footer">
                <Container className='text-center'>
                    <Row>
                        <Col>
                            <div className='footer-links'>
                                <Button className='shadow-none' href="#" variant='link'><FontAwesomeIcon icon={faEnvelope} size="2x" style={{color:'white'}} fixedWidth/></Button>
                                <Button className='shadow-none' href="#" variant='link'><FontAwesomeIcon icon={faGoogle} size="2x" style={{color:'white'}} fixedWidth/></Button>
                                <Button className='shadow-none' href="https://www.linkedin.com/company/vkbeconsulting/" target="_blank" variant='link'><FontAwesomeIcon icon={faLinkedin} size="2x" style={{color:'white'}} fixedWidth/></Button>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Nav className='nav justify-content-center'>
                                {/* <Nav.Link>
                                    <Link  
                                        activeClass='active'
                                        to='main'
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration= {500}
                                        >Home
                                    </Link>
                                </Nav.Link> */}
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
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className='copyright'>
                                <span>VKBE &copy; 2020</span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </React.Fragment>
    )
}

export default Footer;
