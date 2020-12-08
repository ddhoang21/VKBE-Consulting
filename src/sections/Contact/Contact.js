import React from 'react';
import './style.css';
import { Container } from 'react-bootstrap';
import ContactJumbotron from '../../components/Contact-Jumbotron';

const Contact = () => {
    return (
        <div id='contact'>
            <Container style={{marginTop: '60px'}}>
                <hr></hr>
            </Container>
            <Container>
                <br></br>
                <h1 className='contact-header text-center font-weight-bold'>Contact Us</h1>
                <br></br>
                <ContactJumbotron />
            </Container>
        </div>
    )
}

export default Contact;
