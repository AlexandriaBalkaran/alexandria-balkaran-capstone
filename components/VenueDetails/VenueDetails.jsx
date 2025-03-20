import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DayFilter from "../DayFilter/DayFilter";
import "./VenueDetails.scss";

const VenueDetails = ({ id }) => {
  const [venue, setVenue] = useState(null);
  const [deals, setDeals] = useState([]);
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  useEffect(() => {
    const fetchVenueAndDeals = async () => {
      try {
        const venueResponse = await fetch(`http://localhost:8080/venues/${id}`);
        const venueData = await venueResponse.json();
        setVenue(venueData);

        const dealsResponse = await fetch(`http://localhost:8080/venues/${id}/deals`);
        const dealsData = await dealsResponse.json();
        setDeals(dealsData);
      } catch (error) {
        console.error("Error fetching venue details:", error);
      }
    };

    fetchVenueAndDeals();
  }, [id]);

  const handleDayClick = (day) => {
    setSelectedDay(day === selectedDay ? null : day);
    setSelectedTime(null);
  };

  const handleTimeClick = (time) => {
    setSelectedTime(time === selectedTime ? null : time);
  };

  if (!venue) return <div>Loading...</div>;

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
        <img src="/src/assets/images/Arrow.svg" alt="back arrow pointing left"></img>
        Back to Venues
      </Link>
      <div className="venue__image-container">
        <img className="venue__image" src={venue.photo} alt={venue.name} />
      </div>
      <h2>{venue.name}</h2>
      <h3>{venue.neighbourhood}</h3>
      <h4>{venue.address}</h4>
      <h4>{venue.website}</h4>

      <div className="filter__container">
      <h3>Please select a day and time to see deals:</h3>
      <DayFilter
        availableDays={availableDays}
        selectedDay={selectedDay}
        onDayClick={handleDayClick}
      />

      {selectedDay && (
        <div className="times__container">
          {timeSlots.length > 0 ? (
            timeSlots.map((time) => (
              <button
                key={time}
                onClick={() => handleTimeClick(time)}
                className={`time__button ${selectedTime === time ? "selected" : ""}`}
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
