import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import imageDH from '../../img/team/vkbe-DH.png';
import imageZ from '../../img/team/vkbe-Zi.png';
import './style.css';

const Team = () => {
    return (
        <div id='team'>
            <div id='about'>
                <h1 className='team-header text-center font-weight-bold' style={{fontSize: '40px'}}>Meet Our Team</h1>
                <Container className='mt-5 mb-5'>
                    <Row>
                        <Col>
                            <p className='team-intro'>VKBE started with 2 software engineers with complementary skills sets working together to tackle any cloud project.</p>
                            <p className='team-intro'>We have a decade of experience specializing in delivering scalable applications across enterprises of all sizes. Because of the rapid growth of cloud services, adapting to the best practices od well-architected frameworks can be quite confusing.</p>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col xs={3}>
                            <Image src={imageZ} width='100%' height='90%'/>
                        </Col>
                        <Col xs={3}>
                            <h3 className='team-name'><strong>Zlatko Porobic</strong></h3>
                            <h5 className='team-title'>Software Engineer</h5>
                        </Col>
                        <Col xs={3}>
                            <Image src={imageDH} width='100%' height='96%'/>
                        </Col>
                        <Col xs={3}>
                            <h3 className='team-name'><strong>Duc-Huy Do</strong></h3>
                            <h5 className='team-title'>Software Engineer</h5>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col xs={6}>
                            <p className='team-text'>Zlatko excels at designing and developing high performing systems. He builds enterprise grade applications with a strong expertise in real-time stream processing. Along with his deep technical background, he emphasizes the importance of mature build and release pipelines to ensure efficient software development life cycles. He is driven by the concept of infrastructure as code.</p>
                        </Col>
                        <Col xs={6}>
                            <p className='team-text'>Duc-Huy has experience in delivering end-to-end products from various industries such as e-commerce, financial, governmental or healthcare. He works closely with stake-holders from engineers, leadership to end-users for minimizing any risk during the development phase. He focuses on designing the cloud infrastructure and the application development with experience in serverless architecture for web-based applications. He is a cyber-security enthusiast.</p>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <hr></hr>
                </Container>
            </div>
        </div>
    )
}

export default Team;
