import React from 'react';
import TestimonialCarousel from '../components/Carousel';
import { Container } from 'react-bootstrap';


function Testimonial() {
    return (
        <div id='testimonial'>
            <br></br>
            <h1 className='text-center font-weight-bold'>What They Say</h1>
            <TestimonialCarousel />
            <br></br>
            <br></br>
            <Container>
                <hr></hr>
            </Container>
        </div>
    )
}

export default Testimonial;