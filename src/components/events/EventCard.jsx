
const EventCard = ({ image, title }) => (
  <div className="event-card">
    <img src={image} alt={title} />
    <h2>{title}</h2>
  </div>
);

export default EventCard;
