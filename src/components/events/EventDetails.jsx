import React from 'react';
import {artistImage1, artistImage2, artistImage3} from "../../assets/ArtistLineup"

import venue from "../../assets/location_on.svg"
import clock from "../../assets/alarm.svg"
import qrcode from '../../assets/QRcode.svg';

const EventDetails = () => {
  const EventArray = [artistImage1, artistImage2, artistImage3];

  return (
    <div className="event-details">
      
      <div className='event-detail-firstText'>
        <h4>Explore Your First <br /> Event</h4>
      </div>

      <div className='event-name-container'>

        <p className='event-header'>Event Name</p>
        <div className='vanue-date'>
        <div className='event-vanue'>
          <img src={venue} alt={venue} width="15rem" />
          <h5>Venue</h5>
        </div>

        <div className='event-date-time'>
          <img src={clock} alt={clock} width="20rem" />
          <p>04/3/2024 @19:00</p>
        </div>
        </div>
        

        <div className='event-text'>
          <p>Lorem ipsum dolor sit amet consectetur. Ac lorem massa in morbi et sed ipsum. Pellentesque mattis condimentum ut nulla. </p>
        </div>
      </div>

      <div className='artist-album-img'>
      <h3>Artist Lineup</h3>
      <div className="artist-lineup">
        {EventArray.map((item, index) => (
          <div key={index} className="artist">
            <img src={item.default} alt={`Artist ${index + 1}`} style={{ width: index === 1 ? "142px" : "110px", height: index === 1 ? "148px" : "110px" }} />
          </div>
        ))}
      </div>
      </div>

      <div className='qr-join-button'>
        <img src={qrcode} alt="" width="80px" />
        <button style={{borderRadius: "10%", backgroundColor: "#FFCA5F", color: "#1A1D21", fontFamily: "Lexend"}}>Join Waitlist</button>
      </div>
    </div>
  );
}

export default EventDetails;
