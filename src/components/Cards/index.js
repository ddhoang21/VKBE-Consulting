import React from 'react';
import './style.css';
import { Container, Row, Col, Card, Accordion } from 'react-bootstrap';

import image1 from '../../img/services/security-05.png';
import image2 from '../../img/services/consulting-05.png';
import image3 from '../../img/services/cost-05.png';
import image4 from '../../img/services/DevOps-05.png';
import image5 from '../../img/services/migrate-05.png';
import image6 from '../../img/services/build-05.png';

const Cards = () => {
    return (
        <React.Fragment>
                <Container className='mt-5 mb-5'>
                    <Row>
                        <Col lg className='ml-5 mb-3'>
                            <Accordion>
                                <Card id='card'>
                                    <Accordion.Toggle as={Card.Img} eventKey='1'
                                        alt='AWS'
                                        src={image1}
                                        height='150px'
                                        variant='top'
                                    />
                                    <Card.Body>
                                        <Card.Title className='card-title' style={{fontSize: '23px'}}>Security & Compliance</Card.Title>
                                        <p className='line font-weight-bold'>_______</p>
                                        <Accordion.Collapse eventKey='1'>
                                            <Card.Text style={{fontSize: '16px'}}>Ensure that your infrastructure follows AWS Security Best Practices like Netflix, Twitch, and LinkedIn</Card.Text>
                                        </Accordion.Collapse>
                                    </Card.Body>
                                </Card>
                            </Accordion>
                        </Col>
                        <Col lg className='ml-5 mb-3'>
                            <Accordion>
                                <Card id='card'>
                                    <Accordion.Toggle as={Card.Img} eventKey='2' 
                                        alt='build'
                                        src={image2}
                                        height='150px'
                                        variant='top'  
                                    />
                                    <Card.Body>
                                        <Card.Title className='card-title' style={{fontSize: '23px'}}>Strategic Consulting</Card.Title>
                                        <p className='line font-weight-bold'>_______</p>
                                        <Accordion.Collapse eventKey='2'>
                                            <Card.Text style={{fontSize: '16px'}}>Offer architectural guidance on how to start and optimize your AWS projects from start to finish</Card.Text>
                                        </Accordion.Collapse>
                                    </Card.Body>
                                </Card>
                            </Accordion>
                        </Col>
                        <Col lg className='ml-5 mb-3'>
                            <Accordion>
                                <Card id='card'>
                                    <Accordion.Toggle as={Card.Img} eventKey='3'
                                        alt='security'
                                        src={image3}
                                        height='150px'
                                        variant='top'
                                    />
                                    <Card.Body>
                                        <Card.Title className='card-title' style={{fontSize: '23px'}}>Cost</Card.Title>
                                        <p className='line font-weight-bold'>_______</p>
                                        <Accordion.Collapse eventKey='3'>
                                            <Card.Text style={{fontSize: '16px'}}>Significantly reduce your AWS bill (up to 50%) by optimizing your environment for costs</Card.Text>
                                        </Accordion.Collapse>
                                    </Card.Body>
                                </Card>
                            </Accordion>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg className='ml-5 mb-3'>
                            <Accordion>
                                <Card id='card'>
                                    <Accordion.Toggle as={Card.Img} eventKey='4'
                                        alt='strategic'
                                        src={image4}
                                        height='150px'
                                        variant='top'  
                                    />
                                    <Card.Body>
                                        <Card.Title className='card-title' style={{fontSize: '23px'}}>DevOps</Card.Title>
                                        <p className='line font-weight-bold'>_______</p>
                                        <Accordion.Collapse eventKey='4'>
                                            <Card.Text style={{fontSize: '16px'}}>Give you hands-on help with automating the deployment, testing, and monitoring of your services</Card.Text>
                                        </Accordion.Collapse>
                                    </Card.Body>
                                </Card>
                            </Accordion>
                        </Col>
                        <Col lg className='ml-5 mb-3'>
                            <Accordion>
                                <Card id='card'>
                                    <Accordion.Toggle as={Card.Img} eventKey='5' 
                                        alt='cost'
                                        src={image5}
                                        height='150px'
                                        variant='top'  
                                    />
                                    <Card.Body>
                                        <Card.Title className='card-title' style={{fontSize: '23px'}}>Migrate to AWS</Card.Title>
                                        <p className='line font-weight-bold'>_______</p>
                                        <Accordion.Collapse eventKey='5'>
                                            <Card.Text style={{fontSize: '16px'}}>Show you the best and most efficient way to migrate your workloads to AWS</Card.Text>
                                        </Accordion.Collapse>
                                    </Card.Body>
                                </Card>
                            </Accordion>
                        </Col>
                        <Col lg className='ml-5 mb-3'>
                            <Accordion>
                                <Card id='card'>
                                    <Accordion.Toggle as={Card.Img} eventKey='6' 
                                        alt='devops'
                                        src={image6}
                                        height='150px'
                                        variant='top'  
                                    />
                                    <Card.Body>
                                        <Card.Title className='card-title' style={{fontSize: '23px'}}>Build Application</Card.Title>
                                        <p className='line font-weight-bold'>_______</p>
                                        <Accordion.Collapse eventKey='6'>
                                            <Card.Text style={{fontSize: '16px'}}>Build highly scalable applications based on serverless architecture</Card.Text>
                                        </Accordion.Collapse>
                                    </Card.Body>
                                </Card>
                            </Accordion>
                        </Col>
                    </Row>
                </Container>
        </React.Fragment>
    )
}

export default Cards;
