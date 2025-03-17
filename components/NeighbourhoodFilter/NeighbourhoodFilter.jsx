import React, { useEffect, useState } from "react";
import "./NeighbourhoodFilter.scss";

const NeighbourhoodFilter = () => {
  const [venues, setVenues] = useState([]);
  const [filteredVenues, setFilteredVenues] = useState([]);
  const [neighbourhoods, setNeighbourhoods] = useState([]);
  const [selectedNeighbourhood, setSelectedNeighbourhood] = useState("");

  useEffect(() => {
    const fetchVenues = async () => {
      try {
        const response = await fetch("http://localhost:8080/venues");
        const data = await response.json();
        setVenues(data);
        setFilteredVenues(data);
        const selectNeighbourhoods = [...new Set(data.map(venue => venue.neighbourhood))];
        setNeighbourhoods(selectNeighbourhoods);
      } catch (e) {
        console.error("Error fetching venues:", e);
      }
    };
    fetchVenues();
  }, []);


  const handleFilterChange = (event) => {
    const selected = event.target.value;
    setSelectedNeighbourhood(selected);
    if (selected === "") {
      setFilteredVenues(venues);
    } else {
      setFilteredVenues(venues.filter(venue => venue.neighbourhood === selected));
    }
  };

  return (
    <div>
      <label name="neighbourhood">Select Neighbourhood:</label>
      <select id="neighbourhood" value={selectedNeighbourhood} onChange={handleFilterChange}>
        <option value="">All Neighbourhoods</option>
        {neighbourhoods.map((neighbourhood, index) => (
          <option key={index} value={neighbourhood}>{neighbourhood}</option>
        ))}
      </select>

      <ul>
        {filteredVenues.map((venue) => (
          <li key={venue.id}>
            <h3>{venue.name}</h3>
            <h4>{venue.neighbourhood}</h4>
            <p>{venue.address}</p>
            <img src={venue.photo} alt={venue.name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NeighbourhoodFilter;
