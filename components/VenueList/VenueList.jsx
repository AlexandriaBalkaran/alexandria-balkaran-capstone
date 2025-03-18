// import axios from "axios";
// import { useEffect, useState } from "react";
// const API_URL = "http://localhost:8080/venues";

// function VenuesList() {
//   const [venues, setVenues] = useState([]);

//   useEffect(() => {
//     const fetchVenues = async () => {
//       try {
//         const response = await axios.get(API_URL);
//         setVenues(response.data);
//       } catch (e) {
//         console.error("Error fetching venues:", e);
//       }
//     };

//     fetchVenues();
//   }, []);

//   return (
//     <div>
//       <h2>Venues</h2>
//       <ul>
//         {venues.map((venue) => (
//           <li key={venue.id}>{venue.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }