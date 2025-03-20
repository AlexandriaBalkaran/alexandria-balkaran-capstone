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
            <Link className="venue__link"to={`/venue/${venue.id}/deals`}>
            <div className="venue__images-card">
                <img className="venue__images" src={venue.photo} alt={venue.name} />
              <h2>{venue.name}</h2>
              <h4>{venue.neighbourhood}</h4>
            </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VenueCard;
