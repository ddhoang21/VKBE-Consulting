import React, { Component } from "react";
import Cards from "../components/Cards";
import { Container } from "react-bootstrap";

class About extends Component {
    state = {};
    render() {
        return (
            <div id="about">
                <Cards />
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

export default About;
