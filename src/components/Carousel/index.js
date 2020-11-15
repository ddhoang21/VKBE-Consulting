import React from 'react';
import { Container, Carousel, Image } from 'react-bootstrap';
import slide3 from '../../img/testimonial/Space_Needle002.jpg';
import './style.css';

function TestimonialCarousel() {
    return (
        <div>
            <Container className='slider mt-5'>
                <Carousel>
                    <Carousel.Item>
                        <Image
                        className="image-area"
                        src={slide3}
                        alt="First slide"
                        />
                        <Carousel.Caption className='carousel-caption'>
                        <p>“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.”</p>
                        <h4 className='font-weight-bold'>Duc-Hoang Do</h4>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                        className="image-area"
                        src={slide3}
                        alt="Third slide"
                        />
                        <Carousel.Caption className='carousel-caption'>
                        <p>“Lorem Ipsum is simply dummy text of the printing and typesetting industry. The curry was delicious and spicy just how I like it. Loved it!”</p>
                        <h4 className='font-weight-bold'>Praneet Punjabi</h4>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                        className="image-area"
                        src={slide3}
                        alt="Third slide"
                        />
                        <Carousel.Caption className='carousel-caption'>
                        <p>“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.”</p>
                        <h4 className='font-weight-bold'>Duc-Hoang Do</h4>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </div>
    )
}

export default TestimonialCarousel;
