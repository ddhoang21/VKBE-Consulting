import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContactForm from "../components/Form";

class Contact extends Component {
    state = {};
    render() {
        return (
            <Container id="contact">
                <h1 className="text-center font-weight-bold">Contact Us</h1>
                <p className="text-center">Email us with any request: vkbeconsulting@gmail.com</p>
                <Row>
                    <Col>
                        <ContactForm />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Contact;
