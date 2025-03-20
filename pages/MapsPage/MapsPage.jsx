import React, { useEffect, useState } from "react";
import "./MapsPage.scss";
import MapComponent from "../../components/Map/Map";
import SearchBar from "../../components/SearchBar/SearchBar";

function MapsPage() {
  const [venues, setVenues] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchVenues = async () => {
      try {
        const response = await fetch("http://localhost:8080/venues");
        const data = await response.json();
        setVenues(data);
      } catch (e) {
        console.error("Error fetching venues:", e);
      }
    };

    fetchVenues();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredVenues = venues.filter((venue) => {
    const matchesSearch =
      venue.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      venue.neighbourhood.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="maps-page">
      <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <MapComponent venues={filteredVenues} />
    </div>
  );
}

export default MapsPage;
