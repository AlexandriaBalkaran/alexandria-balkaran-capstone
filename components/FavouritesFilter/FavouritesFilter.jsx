import React from "react";
import VenueCard from "../VenueCard/VenueCard";

function FavouritesFilter() {
  const favourites = JSON.parse(localStorage.getItem("favourites")) || [];

  return (
    <div>
      <h2>My Favourites</h2>
      {favourites.length === 0 ? <p>No favourites yet!</p> : <VenueCard venues={favourites} favourites={favourites} />}
    </div>
  );
}

export default FavouritesFilter;
