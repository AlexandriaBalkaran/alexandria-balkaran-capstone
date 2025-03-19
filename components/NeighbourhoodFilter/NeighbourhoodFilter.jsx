import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./NeighbourhoodFilter.scss";

// const NeighbourhoodFilter = () => {
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
//       {/* <label htmlFor="neighbourhood">Select Neighbourhood:</label>
//       <select id="neighbourhood" value={selectedNeighbourhood} onChange={handleFilterChange}>
//         <option value="">All Neighbourhoods</option>
//         {neighbourhoods.map((neighbourhood, index) => (
//           <option key={index} value={neighbourhood}>{neighbourhood}</option>
//         ))}
//       </select> */}

//       <ul>
//         {filteredVenues.map((venue) => (
//           <li key={venue.id}>
//             <h3>{venue.name}</h3>
//             <h4>{venue.neighbourhood}</h4>
//             <Link to={`/venue/${venue.id}/deals`}>
//               <img src={venue.photo} alt={venue.name} />
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

const NeighbourhoodFilter = ({ neighbourhoods, selectedNeighbourhood, onFilterChange }) => {
  return (
    <select value={selectedNeighbourhood} onChange={onFilterChange}>
      <option value="">All Neighbourhoods</option>
      {neighbourhoods.map((neighbourhood, index) => (
        <option key={index} value={neighbourhood}>{neighbourhood}</option>
      ))}
    </select>
  );
};

export default NeighbourhoodFilter;