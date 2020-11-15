import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ContactForm from '../components/Form';

function Contact() {
    return (
        <React.Fragment>
            <Container id='contact'>
                <h1 className='text-center font-weight-bold'>Contact Us</h1>
                <p className='text-center'>Email us with any request: vkbeconsulting@gmail.com</p>
                <Row>
                    <Col>
                        <ContactForm />
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default Contact;
