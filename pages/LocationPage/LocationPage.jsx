import React, { useEffect, useState } from "react";
import "./LocationPage.scss";
import VenueCard from "../../components/VenueCard/VenueCard";
import NeighbourhoodFilter from "../../components/NeighbourhoodFilter/NeighbourhoodFilter";

function LocationPage() {
  const [neighbourhoods, setNeighbourhoods] = useState([]);

  useEffect(() => {
    fetchVenues();
  }, []);

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
