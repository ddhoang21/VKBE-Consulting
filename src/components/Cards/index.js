import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import image1 from "../../img/cloudicon.png";
import image2 from "../../img/computingicon.png";
import image3 from "../../img/architectureicon.png";
import image4 from "../../img/reliableicon.png"
import './style.css';

class Cards extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
  
    render() {
        return (
            <div>
                <Container className="mt-5">
                    <Row>
                        <Col className="mt-5 mb-5 mr-5">
                            <Card id="card1" style={{ width: '16rem' }} className="text-center">
                                <Card.Img
                                    alt="cloud"
                                    src={image1}
                                    width="100px"
                                    height="150px"
                                    variant="top"
                                />
                                <Card.Body>
                                    <Card.Title>Application Re-Host</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="mt-5 mb-5 mr-5 ml-5">
                            <Card id="card2" style={{ width: '16rem' }} className="text-center">
                                <Card.Img 
                                    alt="computer"
                                    src={image2}
                                    width="100px"
                                    height="150px"
                                    variant="top"  
                                />
                                <Card.Body>
                                    <Card.Title>Strategic Consulting </Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="mt-5 mb-5 mr-5 ml-5">
                            <Card id="card3" style={{ width: '17rem' }} className="text-center">
                                <Card.Img 
                                    alt="architecture"
                                    src={image3}
                                    width="100px"
                                    height="150px"
                                    variant="top"  
                                />
                                <Card.Body>
                                    <Card.Title>Re-Architect Applications</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="mt-5 mb-5 ml-5 mr-5">
                            <Card id="card4" style={{ width: '16rem' }} className="text-center">
                                <Card.Img 
                                    alt="reliable"
                                    src={image4}
                                    width="100px"
                                    height="150px"
                                    variant="top"  
                                />
                                <Card.Body>
                                    <Card.Title>Reliability</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Cards;
