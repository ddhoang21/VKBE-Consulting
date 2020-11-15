import React from 'react';
import './App.css';
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
  return (
    <React.Fragment>
        <Navbar />
        <Header />
        <About />
        <Services />
        <Testimonial />
        <Team />
        <Contact />
        <Footer />
      </React.Fragment>
  )
}

export default App;
