import React from 'react';
import { Container } from 'react-bootstrap';

const About = () => {
    return (
        <div id='about'>
            <h1 className='text-center font-weight-bold'>Who We Are</h1>
            <Container className='mt-5 text-center'>
                <p><strong>VKBE</strong> is a technology consulting firm specialized in delivering cloud solutions to our clients.</p>
                <p>As AWS Certified Developers, we will ensure that your cloud implementation is done right. Whether you are getting started with AWS, kickstarting a cloud project, or in the middle of an existing one, we will help you complete your projects faster and capitalize on the benefits of cloud computing.</p>
                <p>Our mission is to create a seamless transition by providing you with the necessary resources and knowledge throughout your entire cloud journey.</p>
            </Container>
            <br></br>
            <Container>
                <hr></hr>
            </Container>
        </div>
    )
}

export default About;
