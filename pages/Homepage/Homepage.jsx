import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import "./HomePage.scss";
import React, { useEffect, useState } from "react";
import HomePageText from "../../components/HomePageText/HomePageText";

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
      <HomePageText/>
    </div>
  );
}

export default HomePage;