import React, { useEffect, useState } from "react";
import "./MapsPage.scss";
import Map from "../../components/Map/Map";
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
      <h2 className="maps-page__text">Find a new bar or restaurant near you</h2>
      <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <Map venues={filteredVenues} />
    </div>
  );
}

export default MapsPage;
