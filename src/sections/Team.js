import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import imageDH from '../img/team/duc-huy.jpg';
import imageZ from '../img/team/zlatko.jpg'; 

function Team() {
    return (
        <div id='team'>
            <div id='about'>
                <h1 className='text-center font-weight-bold'>Our Team</h1>
                <Container className='mt-5 text-center'>
                    <p>VKBE started with 2 software engineers with complementary skills sets working together to tackle any cloud project.</p>
                    <p>We have a decade of experience specializing in delivering scalable applications across enterprises of all sizes. Because of the rapid growth of cloud services, adapting to the best practices od well-architected frameworks can be quite confusing.</p>
                </Container>
                <br></br>
                <Container className='mb-5 text-center'>
                    <Row>
                        <Col xs={6}>
                            <Image src={imageZ} width='85%' height='45%' className='mb-4'/>
                            <p><strong>Zlatko</strong> excels at designing and developing high performing systems. He builds enterprise grade applications with a strong expertise in real-time stream processing. Along with his deep technical background, he emphasizes the importance of mature build and release pipelines to ensure efficient software development life cycles. He is driven by the concept of infrastructure as code.</p>
                        </Col>
                        <Col xs={6}>
                            <Image src={imageDH} width='85%' height='45%' className='mb-4'/>
                            <p><strong>Duc-Huy</strong> has experience in delivering end-to-end products from various industries such as e-commerce, financial, governmental or healthcare. He works closely with stake-holders from engineers, leadership to end-users for minimizing any risk during the development phase. He focuses on designing the cloud infrastructure and the application development with experience in serverless architecture for web-based applications. He is a cyber-security enthusiast.</p>
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
