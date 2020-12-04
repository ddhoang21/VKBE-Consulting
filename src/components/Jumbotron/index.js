import React from 'react';
import { Jumbotron, Button, Col, Row, Image } from 'react-bootstrap';
import { Link } from 'react-scroll';
import './style.css';
// import bgIllustration from '../../img/header/background-illustration-02.png'

const Mainpage = () => {
    return (
        <React.Fragment>
            <Jumbotron className='mb-5' id='jumbo'>
                <Row>
                    <Col>
                        <div className='ml-5' id='headings'>
                            <h1 style={{fontSize:'6vh'}}>VKBE CONSULTING</h1>
                            <h4 style={{fontSize:'3vh'}}>A Seattle based software consulting company</h4>
                        </div>
                        <br></br>
                        <div>
                            <br></br>
                            <div className='ml-5'>
                                <Button id='btn'>
                                    <Link  
                                        to='about'
                                        spy={true}
                                        smooth={true}
                                        offset={-145}
                                        duration= {500}
                                        >Learn More
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </Col>
                    {/* <Col xs={7}>
                        <Image src={bgIllustration} style={{width:'100%', height: '85%'}}/>
                    </Col> */}
                </Row>
            </Jumbotron>
        </React.Fragment>
    )
}

export default Mainpage;
