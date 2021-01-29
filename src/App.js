import React, {useState} from 'react';
import './App.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
// import Navbar from './components/Navbar/index';
import Header from './sections/Main';
import About from './sections/About/About';
// import Testimonial from './sections/Testimonial/Testimonial';
import Team from './sections/Team/Team';
import Contact from './sections/Contact/Contact';
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

import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';
import Logo from './img/logo/vkbe-finallogo-02.png';

const App = () => {
  const [expanded, setExpanded] = useState(false);
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
        {/* <Navbar  /> */}
        <Navbar collapseOnSelect expanded={expanded} fixed='top' variant='dark' expand='lg' id='navigationBar'>
          <Navbar.Brand as={Link}
            activeClass='active'
            to='main'
            spy={true}
            smooth={true}
            offset={-70}
            duration= {500}>
            <img
              alt='logo'
              src={Logo}
              width='100'
              height='30'
              className='navbar-brand ml-5'
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' onClick={() => setExpanded(expanded ? false : 'expanded')}/>
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='nav ml-auto mr-5'>
              <Nav.Link>
                <Link 
                  activeClass='active'
                  to='about'
                  spy={true}
                  smooth={true}
                  offset={-145}
                  duration= {500}
                  onClick={() => setExpanded(false)}
                  >About
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link 
                  activeClass='active'
                  to='services'
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration= {500}
                  onClick={() => setExpanded(false)}
                  >Services
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link 
                  activeClass='active'
                  to='team'
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration= {500}
                  onClick={() => setExpanded(false)}
                  >Team
                </Link>
              </Nav.Link>
              {/* <Nav.Link>
                <Link 
                  activeClass='active'
                  to='testimonial'
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration= {500}
                  onClick={() => setExpanded(false)}
                  >Testimonials
                </Link>
              </Nav.Link> */}
              <Nav.Link>
                <Link
                  activeClass='active'
                  to='contact'
                  spy={true}
                  smooth={true}
                  offset={-65}
                  duration= {500}
                  onClick={() => setExpanded(false)}
                  >Contact Us
                </Link>
              </Nav.Link>
                <BootstrapSwitchButton 
                  onChange={() => setDarkMode(prevMode => !prevMode)}
                  width={50}
                  size='sm'
                  checked={true} 
                  onstyle='dark' 
                  offstyle='outline-light' 
                  onlabel='☾'
                  offlabel='☀'
                />
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Header />
        <About />
        <div id='services'>
          <br></br>
          <h1 className='services-header text-center font-weight-bold' style={{fontSize: '40px'}}>What We Provide</h1>
          <Container className='mt-5 mb-5'>
            <Row>
              <Col lg className='ml-5 mb-3'>
                <Card id='card'>
                  <Card.Img
                    alt='AWS'
                    src={darkMode ? image1 : image7}
                    height='150px'
                    variant='top'
                  />
                  <Card.Body>
                    <Card.Title className='card-title' style={{fontSize: '23px'}}>Security & Compliance</Card.Title>
                    <p className='line font-weight-bold'>_______</p>
                    <Card.Text className='card-text'>Ensure that your infrastructure follows AWS Security Best Practices like Netflix, Twitch, and LinkedIn</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg className='ml-5 mb-3'>
                <Card id='card'>
                  <Card.Img 
                    alt='build'
                    src={darkMode ? image2 : image8}
                    height='150px'
                    variant='top'  
                  />
                  <Card.Body>
                    <Card.Title className='card-title' style={{fontSize: '23px'}}>Strategic Consulting</Card.Title>
                    <p className='line font-weight-bold'>_______</p>
                    <Card.Text className='card-text'>Offer architectural guidance on how to start and optimize your AWS projects from start to finish</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg className='ml-5 mb-3'>
                <Card id='card'>
                  <Card.Img
                    alt='security'
                    src={darkMode ? image3 : image9}
                    height='150px'
                    variant='top'
                  />
                  <Card.Body>
                    <Card.Title className='card-title' style={{fontSize: '23px'}}>Cost</Card.Title>
                    <p className='line font-weight-bold'>_______</p>
                    <Card.Text className='card-text'>Significantly reduce your AWS bill (up to 50%) by optimizing your environment for costs</Card.Text>
                  </Card.Body>
                </Card> 
              </Col>
            </Row>
            <Row>
              <Col lg className='ml-5 mb-3'>
                <Card id='card'>
                  <Card.Img
                    alt='strategic'
                    src={darkMode ? image4 : image10}
                    height='150px'
                    variant='top'  
                  />
                  <Card.Body>
                    <Card.Title className='card-title' style={{fontSize: '23px'}}>DevOps</Card.Title>
                    <p className='line font-weight-bold'>_______</p>
                    <Card.Text className='card-text'>Give you hands-on help with the build and release process including testing and monitoring of your services</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg className='ml-5 mb-3'>
                <Card id='card'>
                  <Card.Img 
                    alt='cost'
                    src={darkMode ? image5 : image11}
                    height='150px'
                    variant='top'  
                  />
                  <Card.Body>
                    <Card.Title className='card-title' style={{fontSize: '23px'}}>Migrate to AWS</Card.Title>
                    <p className='line font-weight-bold'>_______</p>
                    <Card.Text className='card-text'>Show you the best and most efficient way to migrate your workloads to AWS</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg className='ml-5 mb-3'>
                <Card id='card'>
                  <Card.Img 
                    alt='devops'
                    src={darkMode ? image6 : image12}
                    height='150px'
                    variant='top'  
                  />
                  <Card.Body>
                    <Card.Title className='card-title' style={{fontSize: '23px'}}>Build Application</Card.Title>
                    <p className='line font-weight-bold'>_______</p>
                    <Card.Text className='card-text'>Build highly scalable applications based on serverless architecture</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
          <Container>
            <hr></hr>
          </Container>
        </div>
        <Team />
        {/* <Testimonial /> */}
        <Contact />
        <Footer />
      </div>
    </React.Fragment>
  )
}

export default App;
