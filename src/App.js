import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar/index";
import Main from "./sections/Main";
import About from "./sections/About";
import Services from "./sections/Services";
import Contact from "./sections/Contact";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Main />
        <About />
        <Services />
        <Contact />
      </div>
    );
  }
}

export default App;