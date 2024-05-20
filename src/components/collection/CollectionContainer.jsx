import React from 'react'
import ScrollingText from '../ScrollingText';
import EventDetails from '../events/EventDetails';
import logo from "../../assets/LogoOnScreen/astrix_logo.svg";
import logo_text from "../../assets/LogoOnScreen/logo_text.svg";

import EventCarousel from '../events/Carousel';
import { collectionImage1, collectionImage2, collectionImage3, collectionImage4 } from "../../assets/Collection"
import { collectionCardImage } from "../../assets/Collection"
import CollectionDetails from './CollectionDetails';

export const CollectionContainer = () => {

  let images = [collectionImage1, collectionImage2, collectionImage3, collectionImage4]

  let collectionCardArr = [collectionCardImage, collectionCardImage, collectionCardImage]

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
        <p style={{marginTop: "-5rem"}}>IX</p>
      </div>
     </div>
     
     <div className='cont-text'>
      <div className='lowerText'> 
        <p>COLL</p> 
        <p style={{marginTop: "-5rem"}}>ECTI</p>
        <p style={{marginTop: "-5rem"}}>BLE</p> 
      </div>
     </div>
      {/* <SwitchButton /> */}
    </div>




  <div className="main-content">
      <EventCarousel images={images} />        
      <div className='event-detail-container'>
        <ScrollingText props={"Event : Oasis Bus tour , JLN Stadium , Delhi "} />

        <CollectionDetails collectiblesArr={collectionCardArr} />
      </div>
    </div>
  </div>
</div>
)
}
