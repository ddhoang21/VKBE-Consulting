import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import Navbar from './components/Navbar/index';
import Header from './sections/Main';
import About from './sections/About';
import Services from './sections/Services';
import Testimonial from './sections/Testimonial';
import Team from './sections/Team';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
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

    window.matchMedia('(prefers-color-scheme: dark');
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
        <Services />
        <Team />
        <Testimonial />
        <Contact />
        <Footer />
      </div>
    </React.Fragment>
  )
}

export default App;
