import React from 'react';

import ScrollingText from '../ScrollingText';
import EventDetails from './EventDetails';
import logo from "../../assets/LogoOnScreen/astrix_logo.svg";
import logo_text from "../../assets/LogoOnScreen/logo_text.svg";

import EventCarousel from './Carousel';
import { eventImage1, eventImage2, eventImage3, eventImage4 } from "../../assets/Event"



// import "@fontsource/lexend/400-italic.css";

const EventContainer = () => {

  const images = [eventImage1, eventImage2, eventImage3, eventImage4];


  return (
    <div className='event-container'>
      <span className='event-logo-container'>
        <img src={logo} alt="logo" className="logo" />
        <img src={logo_text} alt="logo_text" className="logo-text" />
      </span>


      <div className='event-text-carousel-detail'>
      <div className='container-text'>
         <div className='cont-text'>
          <div className='upperText'>
            <p>ASTR</p>
            <p style={{marginTop: "-12rem"}}>IX</p>
          </div>
         </div>
         
         <div className='cont-text'>
          <div className='lowerText'> 
            <p>EVE</p> 
            <p style={{marginTop: "-12rem"}}>NTS</p> 
          </div>
         </div>
          {/* <SwitchButton /> */}
        </div>




      <div className="main-content">
          <EventCarousel images={images} />        
          <div className='event-detail-container'>
            <ScrollingText props={"Event : Oasis Bus tour , JLN Stadium , Delhi "} />
            <EventDetails />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventContainer;
