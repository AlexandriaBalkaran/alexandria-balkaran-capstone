import React, { useEffect, useState } from "react";
import "./LocationPage.scss";
import VenueCard from "../../components/VenueCard/VenueCard";
import NeighbourhoodFilter from "../../components/NeighbourhoodFilter/NeighbourhoodFilter";

function LocationPage() {
  const [venues, setVenues] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [neighbourhoods, setNeighbourhoods] = useState([]);
  const [selectedNeighbourhoods, setSelectedNeighbourhoods] = useState([]);
  const [showNeighbourhoods, setShowNeighbourhoods] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchVenues = async () => {
      try {
        const response = await fetch("http://localhost:8080/venues");
        const data = await response.json();
        setVenues(data);
        setNeighbourhoods([...new Set(data.map((venue) => venue.neighbourhood))]);

        const savedFavourites = JSON.parse(localStorage.getItem("favourites")) || [];
        setFavourites(savedFavourites);
      } catch (e) {
        console.error("Error fetching venues:", e);
      }
    };

    fetchVenues();
  }, []);

  const handleFavouriteClick = (venue) => {
    setFavourites((prev) => {
      const updatedFavourites = prev.some((fav) => fav.id === venue.id)
        ? prev.filter((fav) => fav.id !== venue.id)
        : [...prev, venue];

      localStorage.setItem("favourites", JSON.stringify(updatedFavourites));

      return updatedFavourites;
    });
  };

  const handleNeighbourhoodClick = (neighbourhood) => {
    setSelectedNeighbourhoods((prevSelected) =>
      prevSelected.includes(neighbourhood)
        ? prevSelected.filter((n) => n !== neighbourhood)
        : [...prevSelected, neighbourhood]
    );
  };

  const toggleNeighbourhoods = () => {
    setShowNeighbourhoods((prev) => !prev);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredVenues = venues.filter((venue) => {
    const matchesSearch =
      venue.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      venue.neighbourhood.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesNeighbourhood =
      selectedNeighbourhoods.length === 0 || selectedNeighbourhoods.includes(venue.neighbourhood);

    return matchesSearch && matchesNeighbourhood;
  });

  return (
    <div className="location-page">
      <NeighbourhoodFilter
        neighbourhoods={neighbourhoods}
        selectedNeighbourhoods={selectedNeighbourhoods}
        onNeighbourhoodClick={handleNeighbourhoodClick}
        toggleNeighbourhoods={toggleNeighbourhoods}
        showNeighbourhoods={showNeighbourhoods}
      />
        <input
        type="text"
        placeholder="Search venues or neighbourhoods..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-bar"
      />
      <VenueCard venues={filteredVenues} onFavouriteClick={handleFavouriteClick} favourites={favourites} />
    </div>
  );
}

export default LocationPage;
