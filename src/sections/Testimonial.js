import React from 'react';
import TestimonialCarousel from '../components/Carousel';
import { Container } from 'react-bootstrap';


const Testimonial = () => {
    return (
        <div id='testimonial'>
            <br></br>
            <h1 className='text-center font-weight-bold'>What They Say</h1>
            <TestimonialCarousel />
            <br></br>
            <br></br>
        </div>
    )
}

export default Testimonial;
