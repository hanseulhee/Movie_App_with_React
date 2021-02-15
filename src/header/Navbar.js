import React, { Component } from "react";
import logo from './logo.png'; 

class Navbar extends Component {
  render() {
    return (
      <div className="intro">
        
      <div className="calendar"></div>
        <div className="navbar">
        <img src={logo} alt="Logo" />
      <div className="nav">
          
        <a href="#4">Home</a>
        <a href="#3">About</a>
        <a href="#2">Work</a>
        <a href="#4">Contact</a>
        </div>
      </div>
      
      </div>      
    );
  }
}

export default Navbar;
