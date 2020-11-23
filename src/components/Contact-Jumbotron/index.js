import React from 'react';
import { Jumbotron } from 'react-bootstrap';

function ContactJumbotron() {
    return (
        <React.Fragment>
            <Jumbotron>
                <p className='text-center'>Schedule a <a href="https://www.google.com/">free consultation</a> if we make sense. Or send us <a href="mailto:someone@example.com">an email</a></p>
            </Jumbotron>
        </React.Fragment>
    )
}

export default ContactJumbotron;
