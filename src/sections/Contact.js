import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ContactJumbotron from '../components/Contact-Jumbotron';

function Contact() {
    return (
        <div id='contact'>
            <Container style={{marginTop: '60px'}}>
                <hr></hr>
            </Container>
            <Container>
                <br></br>
                <h1 className='text-center font-weight-bold'>Contact Us</h1>
                <br></br>
                <ContactJumbotron />
            </Container>
        </div>
    )
}

export default Contact;
