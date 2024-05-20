import { useHistory, useLocation, useNavigate } from 'react-router-dom';

import '../styles/Splash.css';
import { useEffect } from 'react';

import { splashScreen1 } from '../assets/ArtistLineup';
import { splashLogo, splashText } from '../assets/ArtistLineup';
import "../styles/Splash.css";


const Splash = () => {
  const navigate = useNavigate();
  const location = useLocation();

  let currentLocation = location.pathname.split("/").join("")

  console.log("splash", currentLocation)

  useEffect(() => {
    const timer = setTimeout(() => {
    location === "event" ? navigate('/collection') : navigate('/event') ;

    }, 4000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (

    <div className="splash-screen">
      <span className='event-logo-container'>
        <img src={splashLogo.default} alt="logo" className="logo" />
        <img src={splashText.default} alt="logo_text" className="logo-text" />
      </span>

      <img className='splash-text' src={splashScreen1.default} alt="Splash" />
    </div>
  );
};

export default Splash;
