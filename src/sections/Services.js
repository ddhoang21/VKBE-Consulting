import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class Services extends Component {
    state = {};
    render() {
        return (
            <div id="services">
                <h1 className="text-center font-weight-bold">What We Provide</h1>
                <h4 className="text-center">OUR SERVICES</h4>
                <div id="separator">
                    <br></br>
                </div>
                <Container>
                    <hr></hr>
                </Container>
            </div>
        );
    }
}

export default Services;
