import React from "react";
import { Link } from "react-router-dom";
import "./VenueCard.scss";

function VenueCard({ venue }) {

    if (!venue) {
        return <div>No venue available</div>;
      }
  return (
    <Link to={`/venues/${venue.id}`} className="card__link">
      <div className="card__container" key={photo.id}>
        <img
          className="card__image"
          src={venue.photo}
        //   alt={photo.photoDescription}
        />
        <h4 className="card__photographer">{photo.photographer}</h4>
        {/* <div className="tag__container">
        {photo.tags.map((tag) => (
          <Tag tag={tag} key={tag} />
        ))}
        </div> */}
      </div>
    </Link>
  );
}

export default VenueCard;