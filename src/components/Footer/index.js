import React, { Component } from "react";
import './style.css';

class Footer extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
  
    render() {
        return (
            <footer className="footer">
                <span>VKBE &copy; 2020</span>
            </footer>
        )
    }
}

export default Footer;
