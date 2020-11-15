import React from 'react';
import { Container, Row, Col, Card, Accordion } from 'react-bootstrap';
import image3 from '../../img/services/Security-04.png';
import image4 from '../../img/services/StategicConslt-03.png';
import './style.css';

function Cards() {
    return (
        <React.Fragment>
                <Container className='mt-5'>
                    <Row>
                        <Col lg className='ml-5 mb-3'>
                            <Accordion>
                                <Card id='card1' style={{ width: '20rem' }} className='text-center'>
                                    <Accordion.Toggle as={Card.Img} eventKey='1'
                                        alt='AWS'
                                        src={image4}
                                        width='100px'
                                        height='150px'
                                        variant='top'
                                    />
                                    <Card.Body>
                                        <Card.Title>Migrate to AWS</Card.Title>
                                        <Accordion.Collapse eventKey='1'>
                                            <Card.Text>Show you the best and most efficient way to migrate your workloads to AWS</Card.Text>
                                        </Accordion.Collapse>
                                    </Card.Body>
                                </Card>
                            </Accordion>
                        </Col>
                        <Col lg className='ml-5 mb-3'>
                            <Accordion>
                                <Card id='card2' style={{ width: '20rem' }} className='text-center'>
                                    <Accordion.Toggle as={Card.Img} eventKey='2' 
                                        alt='build'
                                        src={image3}
                                        width='100px'
                                        height='150px'
                                        variant='top'  
                                    />
                                    <Card.Body>
                                        <Card.Title>Build Application</Card.Title>
                                        <Accordion.Collapse eventKey='2'>
                                            <Card.Text>Build highly scalable applications based on serverless architecture</Card.Text>
                                        </Accordion.Collapse>
                                    </Card.Body>
                                </Card>
                            </Accordion>
                        </Col>
                        <Col lg className='ml-5 mb-3'>
                            <Accordion>
                                <Card id='card3' style={{ width: '20rem' }} className='text-center'>
                                    <Accordion.Toggle as={Card.Img} eventKey='3'
                                        alt='security'
                                        src={image3}
                                        width='100px'
                                        height='150px'
                                        variant='top'
                                    />
                                    <Card.Body>
                                        <Card.Title>Security</Card.Title>
                                        <Accordion.Collapse eventKey='3'>
                                            <Card.Text>Ensure that your infrastructure follows AWS Security Best Practices like Netflix, Twitch, and LinkedIn</Card.Text>
                                        </Accordion.Collapse>
                                    </Card.Body>
                                </Card>
                            </Accordion>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg className='ml-5 mb-3'>
                            <Accordion>
                                <Card id='card4' style={{ width: '20rem' }} className='text-center'>
                                    <Accordion.Toggle as={Card.Img} eventKey='4'
                                        alt='strategic'
                                        src={image4}
                                        width='100px'
                                        height='150px'
                                        variant='top'  
                                    />
                                    <Card.Body>
                                        <Card.Title>Strategic Consulting</Card.Title>
                                        <Accordion.Collapse eventKey='4'>
                                            <Card.Text>Offer architectural guidance on how to start and optimize your AWS projects from start to finish</Card.Text>
                                        </Accordion.Collapse>
                                    </Card.Body>
                                </Card>
                            </Accordion>
                        </Col>
                        <Col lg className='ml-5 mb-3'>
                            <Accordion>
                                <Card id='card5' style={{ width: '20rem' }} className='text-center'>
                                    <Accordion.Toggle as={Card.Img} eventKey='5' 
                                        alt='cost'
                                        src={image4}
                                        width='100px'
                                        height='150px'
                                        variant='top'  
                                    />
                                    <Card.Body>
                                        <Card.Title>Cost</Card.Title>
                                        <Accordion.Collapse eventKey='5'>
                                            <Card.Text>Significantly reduce your AWS bill (up to 50%) by optimizing your environment for costs</Card.Text>
                                        </Accordion.Collapse>
                                    </Card.Body>
                                </Card>
                            </Accordion>
                        </Col>
                        <Col lg className='ml-5 mb-3'>
                            <Accordion>
                                <Card id='card6' style={{ width: '20rem' }} className='text-center'>
                                    <Accordion.Toggle as={Card.Img} eventKey='6' 
                                        alt='devops'
                                        src={image3}
                                        width='100px'
                                        height='150px'
                                        variant='top'  
                                    />
                                    <Card.Body>
                                        <Card.Title>DevOps</Card.Title>
                                        <Accordion.Collapse eventKey='6'>
                                            <Card.Text>Give you hands-on help with automating the deployment, testing, and monitoring of your servives</Card.Text>
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





// const cardInfo = [
    //     { image: image4, title: 'Cloud Infrastructure', text: '' },
    //     { image: '2', title: 'Cloud Infrastructure', text: '' },
    //     { image: '3', title: 'Cloud Infrastructure', text: '' },
    //     { image: '4', title: 'Cloud Infrastructure', text: '' },
    //     { image: '5', title: 'Cloud Infrastructure', text: '' },
    //     { image: '6', title: 'Cloud Infrastructure', text: '' }
    // ];

    // const RenderCards = (card, index) => {
    //     return (
    //         <Col>
    //             <Card className='text-center' style={{ width: '16rem' }} key={index}>
    //                 <Card.Img 
    //                 src={card.image} 
    //                 style={{ width: '100px', height: '150px' }} 
    //                 variant='top'>
    //                 </Card.Img>
    //                 <Card.Body>
    //                     <Card.Title>{card.title}</Card.Title>
    //                 <Card.Text>{card.text}</Card.Text>
    //             </Card.Body>
    //             </Card>
    //         </Col>
    //     );
    // };

    // return (
    //     <React.Fragment>
    //         <Container>
    //             <Row>
    //                 {cardInfo.map(RenderCards)}
    //             </Row>
    //         </Container>
    //     </React.Fragment>
    // )