import React from 'react';
import {avtarImage1, avtarImage2, avtarImage3, avtarImage4, avtarImage5} from "../../assets/ArtistLineup"

import qrcode from '../../assets/QRcode.svg';

const CollectionDetails = ({collectiblesArr}) => {
  const avtarsArr = [avtarImage1, avtarImage2, avtarImage3, avtarImage4, avtarImage5];


  return (
    <div className="event-details card-detail-container">
      
      <div className='event-detail-firstText'>
        <h4>Explore Your First <br /> Collectible</h4>
      </div>

      <div className='event-name-container' style={{marginTop: "0rem"}}>

        <p className='event-header'>Meta</p>
        <p className='event-header' style={{marginTop: "-6rem"}}>Lives</p>
        
        <div className='vanue-date' style={{marginTop: "-2rem"}}>
          <h4>Live in Astrix</h4>
        </div>
        

        <div className='event-text' style={{marginTop: "1rem"}}>
          <p>Lorem ipsum dolor sit amet consectetur. Ac lorem massa in morbi et sed ipsum. Pellentesque mattis condimentum ut nulla. </p>
        </div>
      </div>

      <div className='avatar'>
        <div style={{display: "flex"}}>
        {avtarsArr.map((avatar, i)=>(
          <img key={i} src={avatar.default} alt={avatar.default} className='avatar-img' />
        ))}
        </div>
        
        <p>22k people interested</p>
      </div>

      <div className='artist-album-img'>
      <h3>Collectibles</h3>
      <div className="collectibles-card-container">
        {collectiblesArr.map((item, index) => (
          <div key={index} className="collectibles-card">
            <div className='card-top'>
              <span style={{backgroundColor: "black", color: "#fff", fontSize: ".5rem", height: ".75rem",  borderRadius: "25%", padding: ".2rem"}}>2024</span>
              <p style={{fontSize: ".5rem"}}>By <span style={{fontWeight: 500}}>Pablo</span></p>
            </div>

            <div style={{display: "flex", flexDirection: "column", alignItems: "center", fontSize: ".5rem", fontWeight: 500}}>
              <p>Collectible Name</p>
              <img src={item.default} alt={`Artist ${index + 1}`}/>
            </div>
          </div>
        ))}
      </div>
      </div>

      <div className='qr-join-button'>
        <img src={""} alt="" width="80px" />
        <button style={{borderRadius: "10%", backgroundColor: "#FFCA5F", color: "#1A1D21", fontFamily: "Lexend"}}>Join Waitlist</button>
      </div>
    </div>
  );
}

export default CollectionDetails;
