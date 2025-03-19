import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
// import NeighbourhoodFilter from "../../components/NeighbourhoodFilter/NeighbourhoodFilter";
import VenueCard from "../../components/VenueCard/VenueCard";
import DayFilter from "../../components/DayFilter/DayFilter";
import "./Homepage.scss";
import React, { useEffect, useState } from "react";

function HomePage() {
  const [venues, setVenues] = useState([]);
  const [neighbourhoods, setNeighbourhoods] = useState([]);
  const [selectedNeighbourhood, setSelectedNeighbourhood] = useState("");
  const [selectedDay, setSelectedDay] = useState("");

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

  //Neighbourhood
  // const handleFilterChange = (event) => {
  //   setSelectedNeighbourhood(event.target.value);
  // };

  // const filteredVenues = selectedNeighbourhood
  //   ? venues.filter(venue => venue.neighbourhood === selectedNeighbourhood)
  //   : venues;

  const handleDayChange = (day) => {
    setSelectedDay(day);
  };

  const filteredVenues = selectedDay
  ? venues.filter(venue => venue.days && venue.days.includes(selectedDay))
  : venues;

  return (
    <div>
   
      {/* <NeighbourhoodFilter 
        neighbourhoods={neighbourhoods} 
        selectedNeighbourhood={selectedNeighbourhood} 
        onFilterChange={handleFilterChange} 
      /> */}
      <DayFilter onDayChange={handleDayChange} />
      <VenueCard venues={filteredVenues} />
    </div>
  );
}

export default HomePage;


//Times
// import { useEffect, useState } from "react";
// import axios from "axios";
// import VenueCard from "../../components/VenueCard/VenueCard";
// import TimeFilter from "../../components/TimeFilter/TimeFilter";  // Import the TimeFilter component
// import "./Homepage.scss";

// function HomePage() {
//   const [venues, setVenues] = useState([]);
//   const [selectedTimePeriod, setSelectedTimePeriod] = useState("");  // State for time period filter

//   useEffect(() => {
//     fetchVenues();
//   }, [selectedTimePeriod]);  // Re-fetch venues whenever the selected time period changes

//   const fetchVenues = async () => {
//     try {
//       const response = await axios.get('http://localhost:8080/venues/deals/time?period=${encodeURIComponent(period)}', {
//         params: {
//           period: selectedTimePeriod, // Pass the selected time period to the backend
//         },
//       });
//       setVenues(response.data);
//     } catch (e) {
//       console.error("Error fetching venues:", e);
//     }
//   };

//   const handleTimePeriodChange = (timePeriod) => {
//     setSelectedTimePeriod(timePeriod);
//   };

//   return (
//     <div>
//       <TimeFilter onTimePeriodChange={handleTimePeriodChange} />

//       <VenueCard venues={venues} />
//     </div>
//   );
// }

// export default HomePage;

