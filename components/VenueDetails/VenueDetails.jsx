import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DayFilter from "../DayFilter/DayFilter";
import "./VenueDetails.scss";

const VenueDetails = ({ id }) => {
  const [venue, setVenue] = useState(null);
  const [deals, setDeals] = useState([]);
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const fetchVenueAndDeals = async () => {
      try {
        const venueResponse = await fetch(`http://localhost:8080/venues/${id}`);
        const venueData = await venueResponse.json();
        setVenue(venueData);

        const dealsResponse = await fetch(
          `http://localhost:8080/venues/${id}/deals`
        );
        const dealsData = await dealsResponse.json();
        setDeals(dealsData);
      } catch (error) {
        console.error("Error fetching venue details:", error);
      }
    };

    fetchVenueAndDeals();

    const savedFavourites =
      JSON.parse(localStorage.getItem("favourites")) || [];
    setFavourites(savedFavourites);
  }, [id]);

  const toggleFavourite = () => {
    const updatedFavourites = favourites.some((fav) => fav.id === venue.id)
      ? favourites.filter((fav) => fav.id !== venue.id)
      : [...favourites, venue];

    setFavourites(updatedFavourites);
    localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
  };

  if (!venue) return <div>Loading...</div>;

  const isFavourite = favourites.some((fav) => fav.id === venue.id);
  const availableDays = [...new Set(deals.map((deal) => deal.day))];

  const timeSlots = [
    ...new Set(
      deals
        .filter((deal) => deal.day === selectedDay)
        .map((deal) => `${deal.start.slice(0, 5)} - ${deal.end.slice(0, 5)}`)
    ),
  ];

  const selectedDeals = deals.filter(
    (deal) =>
      deal.day === selectedDay &&
      `${deal.start.slice(0, 5)} - ${deal.end.slice(0, 5)}` === selectedTime
  );

  return (
    <div className="venue-details">
      <Link to="/" className="back__link">
        <img
          className="back__link-image"
          src="/src/assets/images/Arrow.svg"
          alt="back arrow pointing left"
        />
        <h3>Home</h3>
      </Link>

      <div className="venue__image-container">
        <img className="venue__image" src={venue.photo} alt={venue.name} />
      </div>
      <div className="venue__text-container">
        <h2>{venue.name}</h2>
        <h3>{venue.neighbourhood}</h3>
        <h4>{venue.address}</h4>
        <h4>
          <a href={venue.website} target="_blank" rel="noopener noreferrer">
          {venue.website}
          </a>
        </h4>
      </div>

      <button
        className={`favourite__button-card ${isFavourite ? "liked" : ""}`}
        onClick={toggleFavourite}
      >
        {isFavourite ? "❤️" : "♡"}
      </button>

      <div className="filter__container">
        <h3>Please select a day and time to see deals:</h3>

        <DayFilter
          availableDays={availableDays}
          selectedDay={selectedDay}
          onDayClick={(day) => setSelectedDay(selectedDay === day ? null : day)}
        />

        {selectedDay && (
          <div className="times__container">
            {timeSlots.length > 0 ? (
              timeSlots.map((time) => (
                <button
                  key={time}
                  onClick={() =>
                    setSelectedTime(selectedTime === time ? null : time)
                  }
                  className={`time__button ${
                    selectedTime === time ? "selected" : ""
                  }`}
                >
                  {time}
                </button>
              ))
            ) : (
              <p>No deals available for {selectedDay}</p>
            )}
          </div>
        )}

        {selectedDay && selectedTime && (
          <div className="deals__container">
            <h4>
              {selectedDay} Deals ({selectedTime})
            </h4>
            {selectedDeals.length > 0 ? (
              <ul className="deals__list">
                {selectedDeals.map((deal, index) => (
                  <li key={index} className="deal__item">
                    <p>{deal.category}</p>
                    <p className="deal__price">${deal.price}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No deals available for the selected criteria.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default VenueDetails;
