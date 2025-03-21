// import "./HomePage.scss";
// import React, { useEffect, useState } from "react";
// import HomePageText from "../../components/HomePageText/HomePageText";

// function HomePage() {
//   const [venues, setVenues] = useState([]);
//   const [neighbourhoods, setNeighbourhoods] = useState([]);
//   const [selectedDay, setSelectedDay] = useState("");

//   useEffect(() => {
//     fetchVenues();
//   }, []);

//   const fetchVenues = async () => {
//     try {
//       const response = await fetch("http://localhost:8080/venues");
//       const data = await response.json();
//       setVenues(data);
//       setNeighbourhoods([...new Set(data.map((venue) => venue.neighbourhood))]);
//     } catch (e) {
//       console.error("Error fetching venues:", e);
//     }
//   };

//   const handleDayChange = (day) => {
//     setSelectedDay(day);
//   };

//   const filteredVenues = selectedDay
//     ? venues.filter((venue) => venue.days && venue.days.includes(selectedDay))
//     : venues;

//   return (
//     <div>
//       <HomePageText/>
//     </div>
//   );
// }

// export default HomePage;

import "./HomePage.scss";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HomePageText from "../../components/HomePageText/HomePageText";

function HomePage() {
  const [venues, setVenues] = useState([]);
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
    <div>
      <HomePageText />
      
      <div className="homepage__button-container">
        <Link to="/neighbourhood">
          <button className="homepage__button-neighbhourhood">
            Discover New Bars & Restaurants by Neighbourhood
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
