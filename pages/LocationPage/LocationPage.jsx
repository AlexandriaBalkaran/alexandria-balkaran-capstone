// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import axios from "axios";
// import "./LocationPage.scss";
// import React, { useEffect, useState } from "react";
// import VenueCard from "../../components/VenueCard/VenueCard";
// import NeighbourhoodFilter from "../../components/NeighbourhoodFilter/NeighbourhoodFilter";

// function LocationPage() {
//   const [venues, setVenues] = useState([]);
//   const [neighbourhoods, setNeighbourhoods] = useState([]);
//   const [selectedNeighbourhood, setSelectedNeighbourhood] = useState("");

//   useEffect(() => {
//     fetchVenues();
//   }, []);

//   const fetchVenues = async () => {
//     try {
//       const response = await fetch("http://localhost:8080/venues");
//       const data = await response.json();
//       setVenues(data);
//       setNeighbourhoods([...new Set(data.map(venue => venue.neighbourhood))]);
//     } catch (e) {
//       console.error("Error fetching venues:", e);
//     }
//   };

//   const handleFilterChange = (event) => {
//     setSelectedNeighbourhood(event.target.value);
//   };

//   const filteredVenues = selectedNeighbourhood
//     ? venues.filter(venue => venue.neighbourhood === selectedNeighbourhood)
//     : venues;

//   return (
//     <div>
//            <NeighbourhoodFilter 
//         neighbourhoods={neighbourhoods} 
//         selectedNeighbourhood={selectedNeighbourhood} 
//         onFilterChange={handleFilterChange} 
//       />
//       <VenueCard venues={filteredVenues} />
//     </div>
//   );
// }

// export default LocationPage;


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import "./LocationPage.scss";
import React, { useEffect, useState } from "react";
import VenueCard from "../../components/VenueCard/VenueCard";

function LocationPage() {
  const [venues, setVenues] = useState([]);
  const [neighbourhoods, setNeighbourhoods] = useState([]);
  const [selectedNeighbourhoods, setSelectedNeighbourhoods] = useState([]);
  const [showNeighbourhoods, setShowNeighbourhoods] = useState(false);

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

  const toggleNeighbourhoods = () => {
    setShowNeighbourhoods(!showNeighbourhoods);
  };

  const handleNeighbourhoodClick = (neighbourhood) => {
    setSelectedNeighbourhoods(prevSelected => {
      if (prevSelected.includes(neighbourhood)) {
        return prevSelected.filter(n => n !== neighbourhood);
      } else {
        return [...prevSelected, neighbourhood];
      }
    });
  };

  const filteredVenues = selectedNeighbourhoods.length > 0
    ? venues.filter(venue => selectedNeighbourhoods.includes(venue.neighbourhood))
    : venues;

  return (
    <div>
      <button onClick={toggleNeighbourhoods}>All Neighbourhoods</button>
      {showNeighbourhoods && (
        <div className="neighbourhood-buttons">
          {neighbourhoods.map(neighbourhood => (
            <button
              key={neighbourhood}
              className={`neighbourhood-button ${selectedNeighbourhoods.includes(neighbourhood) ? 'selected' : ''}`}
              onClick={() => handleNeighbourhoodClick(neighbourhood)}
            >
              {neighbourhood}
            </button>
          ))}
        </div>
      )}
      <VenueCard venues={filteredVenues} />
    </div>
  );
}

export default LocationPage;
