import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import NeighbourhoodFilter from "../../components/NeighbourhoodFilter/NeighbourhoodFilter";
import VenueCard from "../../components/VenueCard/VenueCard";
import "./Homepage.scss";
import React, { useEffect, useState } from "react";

function HomePage() {
  const [venues, setVenues] = useState([]);
  const [neighbourhoods, setNeighbourhoods] = useState([]);
  const [selectedNeighbourhood, setSelectedNeighbourhood] = useState("");

  useEffect(() => {
    fetchVenues();
  }, []);

  const fetchVenues = async () => {
    try {
      const response = await fetch("http://localhost:8080/venues");
      const data = await response.json();
      setVenues(data);
      setNeighbourhoods([...new Set(data.map(venue => venue.neighbourhood))]);
    } catch (e) {
      console.error("Error fetching venues:", e);
    }
  };

  const handleFilterChange = (event) => {
    setSelectedNeighbourhood(event.target.value);
  };

  const filteredVenues = selectedNeighbourhood
    ? venues.filter(venue => venue.neighbourhood === selectedNeighbourhood)
    : venues;

  return (
    <div>
      <NeighbourhoodFilter 
        neighbourhoods={neighbourhoods} 
        selectedNeighbourhood={selectedNeighbourhood} 
        onFilterChange={handleFilterChange} 
      />
      <VenueCard venues={filteredVenues} />
    </div>
  );
}

export default HomePage;