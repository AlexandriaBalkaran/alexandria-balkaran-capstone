import React, { useState, useEffect } from "react";
import VenueCard from "../VenueCard/VenueCard";

function FavouritesFilter() {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const savedFavourites = JSON.parse(localStorage.getItem("favourites")) || [];
    setFavourites(savedFavourites);
  }, []);

  const handleFavouriteClick = (venue) => {
    setFavourites((prevFavourites) => {
      const updatedFavourites = prevFavourites.some((fav) => fav.id === venue.id)
        ? prevFavourites.filter((fav) => fav.id !== venue.id)
        : [...prevFavourites, venue];

      localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
      return updatedFavourites;
    });
  };

  return (
    <div>
      <h2>My Favourites</h2>
      {favourites.length === 0 ? (
        <p>No favourites yet!</p>
      ) : (
        <VenueCard venues={favourites} favourites={favourites} onFavouriteClick={handleFavouriteClick} />
      )}
    </div>
  );
}

export default FavouritesFilter;
