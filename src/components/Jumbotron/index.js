import React from 'react';
import { Jumbotron, Button, Col, Row, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import './style.css';

const Mainpage = () => {
    return (
        <React.Fragment>
            <Jumbotron className='mb-5' id='jumbo'>
                <Row>
                    <Col>
                        <div className='ml-5'>
                            <h1 className='main-header'>VKBE CONSULTING</h1>
                            <h4 className='sub-header ml-2'>A Seattle based software consulting company</h4>
                        </div>
                        <br></br>
                        <div>
                            <br></br>
                            <div className='button-container'>
                                <Button id='more-button' className='shadow-none'>
                                    <Link  
                                        to='about'
                                        spy={true}
                                        smooth={true}
                                        offset={-145}
                                        duration= {500}
                                        >Learn More
                                    </Link>
                                </Button>
                                <Button id='contact-button' className='shadow-none'> 
                                    <Link  
                                        to='about'
                                        spy={true}
                                        smooth={true}
                                        offset={-145}
                                        duration= {500}
                                        >Contact Us
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Jumbotron>
        </React.Fragment>
    )
}

export default Mainpage;
