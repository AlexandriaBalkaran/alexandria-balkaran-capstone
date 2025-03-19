import React, { useEffect, useState } from "react";
import "./LocationPage.scss";
import VenueCard from "../../components/VenueCard/VenueCard";
import NeighbourhoodFilter from "../../components/NeighbourhoodFilter/NeighbourhoodFilter";

function LocationPage() {
  const [venues, setVenues] = useState([]);
  const [neighbourhoods, setNeighbourhoods] = useState([]);
  const [selectedNeighbourhoods, setSelectedNeighbourhoods] = useState([]);
  const [showNeighbourhoods, setShowNeighbourhoods] = useState(false);

  useEffect(() => {
    const fetchVenues = async () => {
      try {
        const response = await fetch("http://localhost:8080/venues");
        const data = await response.json();
        setVenues(data);
        setNeighbourhoods([...new Set(data.map((venue) => venue.neighbourhood))]);
      } catch (e) {
        console.error("Error fetching venues:", e);
      }
    };

    fetchVenues();
  }, []);

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

  const filteredVenues =
    selectedNeighbourhoods.length > 0
      ? venues.filter((venue) => selectedNeighbourhoods.includes(venue.neighbourhood))
      : venues;

  return (
    <div className="location-page">
      <NeighbourhoodFilter
        neighbourhoods={neighbourhoods}
        selectedNeighbourhoods={selectedNeighbourhoods}
        onNeighbourhoodClick={handleNeighbourhoodClick}
        toggleNeighbourhoods={toggleNeighbourhoods}
        showNeighbourhoods={showNeighbourhoods}
      />
      <VenueCard venues={filteredVenues} />
    </div>
  );
}

export default LocationPage;
