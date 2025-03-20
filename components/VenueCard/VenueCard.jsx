import React from "react";
import { Link } from "react-router-dom";
import "./VenueCard.scss";

function VenueCard({ venues, onFavouriteClick, favourites }) {
  if (!venues || venues.length === 0) {
    return <div>No venues available</div>;
  }

  return (
    <div className="venue-list">
      <ul>
        {venues.map((venue) => {
          const isFavourite = favourites.some((fav) => fav.id === venue.id);

          return (
            <li key={venue.id} className="venue-item">
              <Link to={`/venue/${venue.id}/deals`}>
                <div className="venue__images-card">
                  <div className="venue__image-container">
                    <img
                      className="venue__images"
                      src={venue.photo}
                      alt={venue.name}
                    />
                    <button
                      className={`favourite__button ${
                        isFavourite ? "liked" : ""
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        onFavouriteClick(venue);
                      }}
                    >
                      {isFavourite ? "❤️" : "♡"}
                    </button>
                  </div>
                  <h2>{venue.name}</h2>
                  <h4>{venue.neighbourhood}</h4>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default VenueCard;
