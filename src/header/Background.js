import React, { Component } from "react";
import back from './background.jpg'; 

class Background extends Component {
    render() {
      return (
          <div className="background">
          <img src={back} alt="Background" />
      
        </div>
      );
    }
  }
  
  export default Background;
  