// import React, { useEffect, useState } from "react";
// import "./NeighbourhoodFilter.scss";

// const NeighbourhoodFilter = () => {
//   const [venues, setVenues] = useState([]);
//   const [filteredVenues, setFilteredVenues] = useState([]);
//   const [neighbourhoods, setNeighbourhoods] = useState([]);
//   const [selectedNeighbourhood, setSelectedNeighbourhood] = useState("");

//   useEffect(() => {
//     const fetchVenues = async () => {
//       try {
//         const response = await fetch("http://localhost:8080/venues");
//         const data = await response.json();
//         setVenues(data);
//         setFilteredVenues(data);
//         const selectNeighbourhoods = [...new Set(data.map(venue => venue.neighbourhood))];
//         setNeighbourhoods(selectNeighbourhoods);
//       } catch (e) {
//         console.error("Error fetching venues:", e);
//       }
//     };
//     fetchVenues();
//   }, []);


//   const handleFilterChange = (event) => {
//     const selected = event.target.value;
//     setSelectedNeighbourhood(selected);
//     if (selected === "") {
//       setFilteredVenues(venues);
//     } else {
//       setFilteredVenues(venues.filter(venue => venue.neighbourhood === selected));
//     }
//   };

//   return (
//     <div>
//       <label name="neighbourhood">Select Neighbourhood:</label>
//       <select id="neighbourhood" value={selectedNeighbourhood} onChange={handleFilterChange}>
//         <option value="">All Neighbourhoods</option>
//         {neighbourhoods.map((neighbourhood, index) => (
//           <option key={index} value={neighbourhood}>{neighbourhood}</option>
//         ))}
//       </select>

//       <ul>
//         {filteredVenues.map((venue) => (
//           <li key={venue.id}>
//             <h3>{venue.name}</h3>
//             <h4>{venue.neighbourhood}</h4>
//             <img src={venue.photo} alt={venue.name} />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default NeighbourhoodFilter;





// SECOND OPTION WORKING
// import React, { useEffect, useState } from "react";
// import "./NeighbourhoodFilter.scss";

// const NeighbourhoodFilter = () => {
//   const [venues, setVenues] = useState([]);
//   const [filteredVenues, setFilteredVenues] = useState([]);
//   const [neighbourhoods, setNeighbourhoods] = useState([]);
//   const [selectedNeighbourhood, setSelectedNeighbourhood] = useState("");
//   const [deals, setDeals] = useState([]); // State for deals
//   const [selectedVenueName, setSelectedVenueName] = useState(""); // State for venue name

//   useEffect(() => {
//     const fetchVenues = async () => {
//       try {
//         const response = await fetch("http://localhost:8080/venues");
//         const data = await response.json();
//         setVenues(data);
//         setFilteredVenues(data);
//         const selectNeighbourhoods = [...new Set(data.map(venue => venue.neighbourhood))];
//         setNeighbourhoods(selectNeighbourhoods);
//       } catch (e) {
//         console.error("Error fetching venues:", e);
//       }
//     };
//     fetchVenues();
//   }, []);

//   const handleFilterChange = (event) => {
//     const selected = event.target.value;
//     setSelectedNeighbourhood(selected);
//     if (selected === "") {
//       setFilteredVenues(venues);
//     } else {
//       setFilteredVenues(venues.filter(venue => venue.neighbourhood === selected));
//     }
//   };

//   const handlePhotoClick = async (venueId, venueName) => {
//     try {
//       const response = await fetch(`http://localhost:8080/venues/${venueId}/deals`);
//       const data = await response.json();
//       setDeals(data); // Store fetched deals in state
//       setSelectedVenueName(venueName); // Store selected venue name
//     } catch (e) {
//       console.error("Error fetching deals:", e);
//     }
//   };

//   return (
//     <div>
//       <label name="neighbourhood">Select Neighbourhood:</label>
//       <select id="neighbourhood" value={selectedNeighbourhood} onChange={handleFilterChange}>
//         <option value="">All Neighbourhoods</option>
//         {neighbourhoods.map((neighbourhood, index) => (
//           <option key={index} value={neighbourhood}>{neighbourhood}</option>
//         ))}
//       </select>

//       <ul>
//         {filteredVenues.map((venue) => (
//           <li key={venue.id}>
//             <h3>{venue.name}</h3>
//             <h4>{venue.neighbourhood}</h4>
//             <img
//               src={venue.photo}
//               alt={venue.name}
//               style={{ cursor: "pointer" }}
//               onClick={() => handlePhotoClick(venue.id, venue.name)} // Handle photo click
//             />
//           </li>
//         ))}
//       </ul>

//       {/* Display deals when a photo is clicked */}
//       {deals.length > 0 && (
//         <div className="deals-section">
//           <h2>Deals for {selectedVenueName}</h2>
//           <ul>
//             {deals.map((deal, index) => (
//               <li key={index}>
//                 <p><strong>Type of Drink:</strong> {deal.type_of_drink}</p>
//                 <p><strong>Category:</strong> {deal.category}</p>
//                 <p><strong>Price:</strong> ${deal.price}</p>
//                 <p><strong>Time:</strong> {deal.start} - {deal.end}</p>
//                 <p><strong>Day:</strong> {deal.day}</p>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default NeighbourhoodFilter;





import React, { useEffect, useState } from "react";
import "./NeighbourhoodFilter.scss";

const NeighbourhoodFilter = () => {
  const [venues, setVenues] = useState([]);
  const [neighbourhoods, setNeighbourhoods] = useState([]);
  const [selectedNeighbourhood, setSelectedNeighbourhood] = useState("");
  const [selectedVenue, setSelectedVenue] = useState(null);

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

  const handlePhotoClick = async (venue) => {
    try {
      const response = await fetch(`http://localhost:8080/venues/${venue.id}/deals`);
      const deals = await response.json();
      setSelectedVenue({ ...venue, deals });
    } catch (e) {
      console.error("Error fetching deals:", e);
    }
  };

  const filteredVenues = selectedNeighbourhood
    ? venues.filter(venue => venue.neighbourhood === selectedNeighbourhood)
    : venues;

  return (
    <div>
      <label htmlFor="neighbourhood">Select Neighbourhood:</label>
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
            <img
              src={venue.photo}
              alt={venue.name}
              style={{ cursor: "pointer" }}
              onClick={() => handlePhotoClick(venue)}
            />
          </li>
        ))}
      </ul>

      {selectedVenue && (
        <div className="deals-section">
          <h2>Deals for {selectedVenue.name}</h2>
          <ul>
            {selectedVenue.deals.map((deal, index) => (
              <li key={index}>
                <p><strong>Type of Drink:</strong> {deal.type_of_drink}</p>
                <p><strong>Category:</strong> {deal.category}</p>
                <p><strong>Price:</strong> ${deal.price}</p>
                <p><strong>Time:</strong> {deal.start} - {deal.end}</p>
                <p><strong>Day:</strong> {deal.day}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NeighbourhoodFilter;