import React from "react";
import { Link } from "react-router-dom";
import "./VenueCard.scss";

function VenueCard({ venues }) {
  if (!venues || venues.length === 0) {
    return <div>No venues available</div>;
  }

  return (
    <div className="venue-list">
      <ul>
        {venues.map((venue) => (
          <li key={venue.id} className="venue-item">
            <h3>{venue.name}</h3>
            <h4>{venue.neighbourhood}</h4>
            <Link to={`/venue/${venue.id}/deals`}>
              <img src={venue.photo} alt={venue.name} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VenueCard;