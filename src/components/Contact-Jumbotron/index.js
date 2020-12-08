import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import './style.css';

const ContactJumbotron = () => {
    return (
        <React.Fragment>
            <Jumbotron className='jumbo'>
                <p className='text-center mt-3'>Schedule a <a href="https://calendly.com/vkbeconsulting" target="_blank">free consultation</a> if we make sense</p>
            </Jumbotron>
        </React.Fragment>
    )
}

export default ContactJumbotron;
