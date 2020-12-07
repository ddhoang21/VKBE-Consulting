import React from 'react';
import { Container } from 'react-bootstrap';
import './style.css';

const About = () => {
    return (
        <div id='about'>
            <h1 className='about-header text-center font-weight-bold' style={{fontSize: '40px'}}>Who We Are</h1>
            <Container className='mt-5'>
                <p className='about-text'><strong>VKBE</strong> is a technology consulting firm specialized in delivering cloud solutions to our clients.</p>
                <p className='about-text'>As AWS Certified Developers, we will ensure that your cloud implementation is done right. Whether you are getting started with AWS, kickstarting a cloud project, or in the middle of an existing one, we will help you complete your projects faster and capitalize on the benefits of cloud computing.</p>
                <p className='about-text'>Our mission is to create a seamless transition by providing you with the necessary resources and knowledge throughout your entire cloud journey.</p>
            </Container>
            <br></br>
            <Container>
                <hr></hr>
            </Container>
        </div>
    )
}

export default About;
