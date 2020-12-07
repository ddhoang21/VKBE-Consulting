import React from 'react';
import './App.css';
import { Container, Row, Col, Card, Accordion } from 'react-bootstrap';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import Navbar from './components/Navbar/index';
import Header from './sections/Main';
import About from './sections/About/About';
import Testimonial from './sections/Testimonial';
import Team from './sections/Team/Team';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

import image1 from './img/services/darkmode/securityD-05.png';
import image2 from './img/services/darkmode/consultingD-06.png';
import image3 from './img/services/darkmode/costD-07.png';
import image4 from './img/services/darkmode/DevOpsD-08.png';
import image5 from './img/services/darkmode/importD-09.png';
import image6 from './img/services/darkmode/buildD-10.png';
import image7 from './img/services/lightmode/security-05.png';
import image8 from './img/services/lightmode/consulting-05.png';
import image9 from './img/services/lightmode/cost-05.png';
import image10 from './img/services/lightmode/DevOps-05.png';
import image11 from './img/services/lightmode/migrate-05.png';
import image12 from './img/services/lightmode/build-05.png';

const App = () => {
  const isReturningUser = 'dark' in localStorage;
  const [darkMode, setDarkMode] = React.useState(getInitialMode());
  React.useEffect(() => {
    localStorage.setItem('dark', JSON.stringify(darkMode));
  }, [darkMode]);

  function getInitialMode() {
    const savedMode = JSON.parse(localStorage.getItem('dark'));
    const userPrefersDark = getPrefColorScheme();

    if (isReturningUser) {
      return savedMode;
    } else if (userPrefersDark) {
      return true;
    }else {
      return false;
    }
  }

  function getPrefColorScheme() {
    if (!window.matchMedia) return;

    window.matchMedia('prefers-color-scheme: dark');
  }

  return (
    <React.Fragment>
      <div className={darkMode ? 'dark-mode' : 'light-mode'}>
        <Navbar  />
        <Header />
        <Container className='text-right'>
          <BootstrapSwitchButton 
            onChange={() => setDarkMode(prevMode => !prevMode)}
            width={50}
            size="sm"
            checked={true} 
            onstyle='dark' 
            offstyle="outline-light" 
            onlabel='☾'
            offlabel='☀'
          />
        </Container>
        <About />
        <div id='services'>
          <br></br>
          <h1 className='services-header text-center font-weight-bold' style={{fontSize: '40px'}}>What We Provide</h1>
          <Container className='mt-5 mb-5'>
            <Row>
              <Col lg className='ml-5 mb-3'>
                <Accordion>
                  <Card id='card'>
                    <Accordion.Toggle as={Card.Img} eventKey='1'
                      alt='AWS'
                      src={darkMode ? image1 : image7}
                      height='150px'
                      variant='top'
                    />
                    <Card.Body>
                      <Card.Title className='card-title' style={{fontSize: '23px'}}>Security & Compliance</Card.Title>
                      <p className='line font-weight-bold'>_______</p>
                      <Accordion.Collapse eventKey='1'>
                        <Card.Text style={{fontSize: '16px', fontFamily: "'Roboto', sans-serif"}}>Ensure that your infrastructure follows AWS Security Best Practices like Netflix, Twitch, and LinkedIn</Card.Text>
                      </Accordion.Collapse>
                    </Card.Body>
                  </Card>
                </Accordion>
              </Col>
              <Col lg className='ml-5 mb-3'>
                <Accordion>
                  <Card id='card'>
                    <Accordion.Toggle as={Card.Img} eventKey='2' 
                      alt='build'
                      src={darkMode ? image2 : image8}
                      height='150px'
                      variant='top'  
                    />
                    <Card.Body>
                      <Card.Title className='card-title' style={{fontSize: '23px'}}>Strategic Consulting</Card.Title>
                      <p className='line font-weight-bold'>_______</p>
                      <Accordion.Collapse eventKey='2'>
                        <Card.Text style={{fontSize: '16px', fontFamily: "'Roboto', sans-serif"}}>Offer architectural guidance on how to start and optimize your AWS projects from start to finish</Card.Text>
                      </Accordion.Collapse>
                    </Card.Body>
                  </Card>
                </Accordion>
              </Col>
              <Col lg className='ml-5 mb-3'>
                <Accordion>
                  <Card id='card'>
                    <Accordion.Toggle as={Card.Img} eventKey='3'
                      alt='security'
                      src={darkMode ? image3 : image9}
                      height='150px'
                      variant='top'
                    />
                    <Card.Body>
                      <Card.Title className='card-title' style={{fontSize: '23px'}}>Cost</Card.Title>
                      <p className='line font-weight-bold'>_______</p>
                      <Accordion.Collapse eventKey='3'>
                        <Card.Text style={{fontSize: '16px', fontFamily: "'Roboto', sans-serif"}}>Significantly reduce your AWS bill (up to 50%) by optimizing your environment for costs</Card.Text>
                      </Accordion.Collapse>
                    </Card.Body>
                  </Card>
                </Accordion>
              </Col>
            </Row>
            <Row>
              <Col lg className='ml-5 mb-3'>
                <Accordion>
                  <Card id='card'>
                    <Accordion.Toggle as={Card.Img} eventKey='4'
                      alt='strategic'
                      src={darkMode ? image4 : image10}
                      height='150px'
                      variant='top'  
                    />
                    <Card.Body>
                      <Card.Title className='card-title' style={{fontSize: '23px'}}>DevOps</Card.Title>
                      <p className='line font-weight-bold'>_______</p>
                      <Accordion.Collapse eventKey='4'>
                        <Card.Text style={{fontSize: '16px', fontFamily: "'Roboto', sans-serif"}}>Give you hands-on help with automating the deployment, testing, and monitoring of your services</Card.Text>
                      </Accordion.Collapse>
                    </Card.Body>
                  </Card>
                </Accordion>
              </Col>
              <Col lg className='ml-5 mb-3'>
                <Accordion>
                  <Card id='card'>
                    <Accordion.Toggle as={Card.Img} eventKey='5' 
                      alt='cost'
                      src={darkMode ? image5 : image11}
                      height='150px'
                      variant='top'  
                    />
                    <Card.Body>
                      <Card.Title className='card-title' style={{fontSize: '23px'}}>Migrate to AWS</Card.Title>
                      <p className='line font-weight-bold'>_______</p>
                      <Accordion.Collapse eventKey='5'>
                          <Card.Text style={{fontSize: '16px', fontFamily: "'Roboto', sans-serif"}}>Show you the best and most efficient way to migrate your workloads to AWS</Card.Text>
                      </Accordion.Collapse>
                    </Card.Body>
                  </Card>
                </Accordion>
              </Col>
              <Col lg className='ml-5 mb-3'>
                <Accordion>
                  <Card id='card'>
                    <Accordion.Toggle as={Card.Img} eventKey='6' 
                      alt='devops'
                      src={darkMode ? image6 : image12}
                      height='150px'
                      variant='top'  
                    />
                    <Card.Body>
                      <Card.Title className='card-title' style={{fontSize: '23px'}}>Build Application</Card.Title>
                      <p className='line font-weight-bold'>_______</p>
                      <Accordion.Collapse eventKey='6'>
                        <Card.Text style={{fontSize: '16px', fontFamily: "'Roboto', sans-serif"}}>Build highly scalable applications based on serverless architecture</Card.Text>
                      </Accordion.Collapse>
                    </Card.Body>
                  </Card>
                </Accordion>
              </Col>
            </Row>
          </Container>
          <Container>
            <hr></hr>
          </Container>
        </div>
        <Team />
        <Testimonial />
        <Contact />
        <Footer />
      </div>
    </React.Fragment>
  )
}

export default App;
