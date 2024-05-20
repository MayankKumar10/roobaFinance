import './App.css';
import { Route, Routes } from 'react-router-dom';
import { CollectionContainer } from './components/collection/CollectionContainer';
import EventContainer from './components/events/EventContainer';

import "@fontsource/lexend"; // Defaults to weight 400
import "@fontsource/lexend/400.css"; // Specify weight
import Splash from './components/Splash';
import SwitchButton from './components/SwitchButton';

const App = () => {


  return(
    <div className="App" >
      <Routes>
        <Route path="/event" element={<EventContainer />} />
        <Route path="/collection" element={<CollectionContainer />} />
        <Route path="/" element={<Splash />} />
      </Routes>
      <SwitchButton />
  </div>
  )
}

export default App;
