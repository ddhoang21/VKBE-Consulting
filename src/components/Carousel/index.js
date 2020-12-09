import React from 'react';
import { Container, Carousel, Image } from 'react-bootstrap';
import slide3 from '../../img/header/landing-bg.png';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt} from '@fortawesome/free-solid-svg-icons';

const TestimonialCarousel = () => {
    return (
        <div>
            <Container className='slider mt-5'>
                <Carousel>
                    <Carousel.Item>
                        <Image
                        className='image-area'
                        src={slide3}
                        alt='First slide'
                        />
                        <Carousel.Caption className='carousel-caption'>
                        <p className='testimonial-text'>“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.”</p>
                        <h4 className='testimonial-text font-weight-bold'>Michael Scofield</h4>
                        <br></br>
                        <FontAwesomeIcon icon={faStar} size='2x' style={{color:'white'}} fixedWidth/>
                        <FontAwesomeIcon icon={faStar} size='2x' style={{color:'white'}} fixedWidth/>
                        <FontAwesomeIcon icon={faStar} size='2x' style={{color:'white'}} fixedWidth/>
                        <FontAwesomeIcon icon={faStar} size='2x' style={{color:'white'}} fixedWidth/>
                        <FontAwesomeIcon icon={faStarHalfAlt} size='2x' style={{color:'white'}} fixedWidth/>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                        className='image-area'
                        src={slide3}
                        alt='Third slide'
                        />
                        <Carousel.Caption className='carousel-caption'>
                        <p className='testimonial-text'>“Lorem Ipsum is simply dummy text of the printing and typesetting industry. The curry was delicious and spicy just how I like it. Loved it!”</p>
                        <h4 className='testimonial-text font-weight-bold'>Praneet Punjabi</h4>
                        <br></br>
                        <FontAwesomeIcon icon={faStar} size='2x' style={{color:'white'}} fixedWidth/>
                        <FontAwesomeIcon icon={faStar} size='2x' style={{color:'white'}} fixedWidth/>
                        <FontAwesomeIcon icon={faStar} size='2x' style={{color:'white'}} fixedWidth/>
                        <FontAwesomeIcon icon={faStar} size='2x' style={{color:'white'}} fixedWidth/>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                        className='image-area'
                        src={slide3}
                        alt='Third slide'
                        />
                        <Carousel.Caption className='carousel-caption'>
                        <p className='testimonial-text'>“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.”</p>
                        <h4 className='testimonial-text font-weight-bold'>John Doe</h4>
                        <br></br>
                        <FontAwesomeIcon icon={faStar} size='2x' style={{color:'white'}} fixedWidth/>
                        <FontAwesomeIcon icon={faStar} size='2x' style={{color:'white'}} fixedWidth/>
                        <FontAwesomeIcon icon={faStar} size='2x' style={{color:'white'}} fixedWidth/>
                        <FontAwesomeIcon icon={faStar} size='2x' style={{color:'white'}} fixedWidth/>
                        <FontAwesomeIcon icon={faStar} size='2x' style={{color:'white'}} fixedWidth/>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </div>
    )
}

export default TestimonialCarousel;
