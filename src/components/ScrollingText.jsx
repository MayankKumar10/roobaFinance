import React, { Children } from 'react';
import "@fontsource/krona-one";
import Star from "../assets/starStrip.svg"

const ScrollingText = ({props}) =>{

  return (
  <div className="scrolling-text">
    <div className="marquee" style={{ display: "flex", justifyContent: "center", alignItems: "center", fontFamily: "Krona One", textAlign: "center" }}>

       <p>{props}</p> &nbsp;
      <img src={Star} alt="" style={{width:"2.2rem"}} />
    </div>
  </div>
)
} 

export default ScrollingText;
