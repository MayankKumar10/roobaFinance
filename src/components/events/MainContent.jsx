import EventCard from './EventCard';

const MainContent = () => (
  <div className="main-content">
    <div className="events">
      <EventCard image="../src/assets/Event/eventImage1.svg" title="Event Name1" />
      <EventCard image="../src/assets/Event/eventImage2.svg" title="Event Name2" />
      <EventCard image="../src/assets/Event/eventImage3.svg" title="Event Name3" />
      <EventCard image="../src/assets/Event/eventImage4.svg" title="Event Name4" />
    </div>
    <div className="event-details">
      <h2>Explore Your First Event</h2>
      <p>Venue: JLN Stadium, Delhi</p>
      <p>Date: 04/3/2024 @19:00</p>
      <p>Lorem ipsum dolor sit amet consectetur...</p>
      <h3>Artist Lineup</h3>
      <div className="artist-lineup">
        <div className="artist">
          <img src="/path/to/artist1.jpg" alt="Artist 1" />
        </div>
        <div className="artist">
          <img src="/path/to/artist2.jpg" alt="Artist 2" />
        </div>
        <div className="artist">
          <img src="/path/to/artist3.jpg" alt="Artist 3" />
        </div>
      </div>
    </div>
  </div>
);

export default MainContent;
