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
            <footer className="footer text-center">
                <Container>
                        <Button className='shadow-none' href="mailto:info@vkbeconsulting.com" variant='link'>
                            <FontAwesomeIcon icon={faEnvelope} size="3x" className='footer-links'/>
                        </Button>
                        <Button className='shadow-none' href="https://www.linkedin.com/company/vkbeconsulting/" target="_blank" variant='link'>
                            <FontAwesomeIcon icon={faLinkedin} size="3x" className='footer-links'/>
                        </Button>
                </Container>
                    <div className='copyright'>
                        <span>VKBE &copy; 2020</span>
                    </div>
            </footer>
        </React.Fragment>
    )
}

export default Footer;
