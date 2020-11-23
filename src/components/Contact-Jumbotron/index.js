import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import './style.css';

function ContactJumbotron() {
    return (
        <React.Fragment>
            <Jumbotron className='jumbo'>
                <p className='text-center mt-3'>Schedule a <a href="https://www.google.com/">free consultation</a> if we make sense. Or send us <a href="mailto:someone@example.com">an email</a></p>
            </Jumbotron>
        </React.Fragment>
    )
}

export default ContactJumbotron;
