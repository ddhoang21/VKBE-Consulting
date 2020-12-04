import React from 'react';
import { Container } from 'react-bootstrap';
import Cards from '../components/Cards';

const Services = () => {
    return (
        <div id='services'>
            <br></br>
            <h1 className='text-center font-weight-bold'>What We Provide</h1>
            <Cards />
            <Container>
                <hr></hr>
            </Container>
        </div>
    )
}

export default Services;
