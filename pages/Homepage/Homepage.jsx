import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
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
      setNeighbourhoods([...new Set(data.map((venue) => venue.neighbourhood))]);
    } catch (e) {
      console.error("Error fetching venues:", e);
    }
  };

  const handleDayChange = (day) => {
    setSelectedDay(day);
  };

  const filteredVenues = selectedDay
    ? venues.filter((venue) => venue.days && venue.days.includes(selectedDay))
    : venues;

  return (
    <div>
      <h2>Welcome to Pour Decisions 🍸</h2>
      <p>Your Guide to the Best Happy Hour Deals in Toronto!</p>
      <p>
        Why spend hours searching for the best happy hour specials when you can
        find them all in one place? Pour Decisions is your go-to web app for
        discovering the best drink and food deals in downtown Toronto – all
        based on your location, date, and time of day. Whether you're looking
        for an afternoon pint, evening cocktails, or late-night bites, we've got
        you covered! 🍻🍹
      </p>

      <h4>How It Works</h4>
      <p>
        ✅ Find Deals Instantly – Browse happy hour specials by neighbourhood,
        time, and date
      </p>
      <p>
        ✅ Save Time & Money – No more endless Google searches or
        overpaying for drinks 💰 
      </p>
      <p>
        ✅ Unbiased Reviews – Read and leave reviews on
        drinks, food, atmosphere, and experience 
      </p>
      <p>
        ✅ Drink First, Think Later –
        Just open our site and let the deals come to you! 🍸
      </p>
      <h4>Why Pour Decisions?</h4>
      <p>
        With the cost of living on the rise, every dollar counts. We believe
        affordable drinks and good times should be easy to find. Whether you're
        a cocktail connoisseur, beer enthusiast, or foodie looking for the best
        bites, we make happy hour hunting effortless. 
      </p>
      <p>
        💡 Stop Googling, start drinking – discover Toronto’s best happy hour deals today!
      </p>
      <img className="skyline__image"
              src="/src/assets/images/homepage-skyline-pd.svg"
              alt="skyline of Toronto cartoon"
        ></img>
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
