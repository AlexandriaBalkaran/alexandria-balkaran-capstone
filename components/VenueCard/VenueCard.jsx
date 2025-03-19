import React from "react";
import { Link } from "react-router-dom";
import "./VenueCard.scss";

function VenueCard({ venue }) {
  if (!venue) {
    return <div>No venue available</div>;
  }

  return (
    <Link to={`/venues/${venue.id}`} className="card__link">
      <div className="card__container" key={venue.id}>
        <img
          className="card__image"
          src={venue.photo}
          alt={venue.name || "Venue image"}
        />
        <h4 className="card__name">{venue.name}</h4>
        <div className="tag__container">
          {venue.days && venue.days.map((day) => (
            <span className="tag" key={day}>{day}</span>
          ))}
        </div>
      </div>
    </Link>
  );
}

export default VenueCard;
