import React from 'react';
import './style.css';
import TestimonialCarousel from '../../components/Carousel';

const Testimonial = () => {
    return (
        <div id='testimonial'>
            <br></br>
            <h1 className='testimonial-header text-center font-weight-bold'>What They Say</h1>
            <TestimonialCarousel />
            <br></br>
            <br></br>
        </div>
    )
}

export default Testimonial;
