//This will be for the hero image

import React from "react";
// import {Container} from "../Grid";
import "./style.css";

// function Hero() {
//     return (
        // <Container >
            // <div className="hero-img.section">
            // </div>
        // </Container>
//     );
// }



const Hero = (props) => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    const style = {
      'position': 'fixed',
      'top': 0, 
      'left': 0,
      'min-width': '100%',
      'min-height': '100%'
    }
    
    return(
      <div style={style}>
        <img src={`../../assets/cool-background.png/${width}/${height}?image=${props.number}`} style={style}/>
      </div>
    )
  }

export default Hero;