import React from 'react';
import { Container } from 'react-bootstrap';
import Cards from '../../components/Cards';
import './style.css';

const Services = () => {
    return (
        <div id='services'>
            <br></br>
            <h1 className='services-header text-center font-weight-bold' style={{fontSize: '40px'}}>What We Provide</h1>
            <Cards />
            <Container>
                <hr></hr>
            </Container>
        </div>
    )
}

export default Services;
