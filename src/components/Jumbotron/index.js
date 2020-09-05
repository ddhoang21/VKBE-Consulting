import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { Jumbotron, Button } from "react-bootstrap";
import mainImage from "../../img/header/Space_Needle002.jpg";
import { Link } from "react-scroll";
import './style.css';

class Mainpage extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
  
    render() {
        return (
            <Row>
                <Col xs={6}>
                    <Jumbotron className="mt-3 mb-5" id="jumbo">
                        <div id="headings" className="ml-5">
                            <h1>VKBE CONSULTING</h1>
                            <p>A Seattle based software consulting company</p>
                        </div>
                        <br></br>
                        <div id="paragraph" className="ml-5">
                            <p>VKBE is a technology consulting firm specialized in delivering cloud solutions to our partners.</p>
                            <p>As certified professionals, we ensure that your infrastructure will have the performance, resilience and security for your applications to run at scale.</p>
                            <p>By leveraging Amazon Web Services, we are following the best practices of cloud computing. Our team is committed to understand your needs enabling us to deliver a reliable solution for your challenges.</p>
                            <p>Our mission is to create a seamless transition by providing you with the necessary resources and knowledge throughout your entire cloud journey.</p>
                            <br></br>
                            <div>
                                <Button id="btn">
                                    <Link  
                                        to="about"
                                        spy={true}
                                        smooth={true}
                                        offset={-190}
                                        duration= {500}
                                        >Learn More
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </Jumbotron>
                </Col>
                <Col xs={6}>
                <img
                    alt="main image"
                    src={mainImage}
                    width="95%"
                    height="80%"
                    className="mt-5 mb-5"
                />
                </Col>
            </Row>
        )
    }
}

export default Mainpage;
