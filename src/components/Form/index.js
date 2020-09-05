import React, { Component } from "react";
import { Col } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";
import './style.css';

class ContactForm extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
  
    render() {
        return (
            <Form className="text-center mt-4">
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Control type="text" placeholder="Full Name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Control type="text" placeholder="Company" />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Control type="email" placeholder="Email Address" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPhone">
                        <Form.Control type="tel" placeholder="Phone Number" />
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows="3" placeholder="Message"/>
                </Form.Group>

                <Button variant="dark" type="submit">
                    Submit
                </Button>
            </Form>
        )
    }
}

export default ContactForm;
