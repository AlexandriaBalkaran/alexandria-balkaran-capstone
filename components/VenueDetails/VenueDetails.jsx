import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
        console.error('Error fetching venue details:', error);
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

  const formatTime = (timeString) => {
  if (!timeString) return ""; // Handle potential null values
  const [hours, minutes] = timeString.split(":");
  return `${hours}:${minutes}`; // Extracts only HH:mm
};

const timeSlots = [
  ...new Set(
    deals
      .filter(deal => deal.day === selectedDay)
      .map(deal => `${formatTime(deal.start)} - ${formatTime(deal.end)}`)
  )
];


  const selectedDeals = deals.filter(deal => 
    deal.day === selectedDay && 
    `${deal.start} - ${deal.end}` === selectedTime
  );

  return (
    <div>
      <Link to="/">Back to Venues</Link>
      <h2>{venue.name}</h2>
      <img src={venue.photo} alt={venue.name} />
      <h2>{venue.neighbourhood}</h2>
      <h4>{venue.address}</h4>

      <h3>Please select a day and time to see deals:</h3>
      <div className="days-container">
        {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
          <button
            key={day}
            onClick={() => handleDayClick(day)}
            className={`day-button ${selectedDay === day ? 'selected' : ''}`}
          >
            {day}
          </button>
        ))}
      </div>

      {selectedDay && (
        <div className="times-container">
          {timeSlots.length > 0 ? (
            timeSlots.map((time) => (
              <button
                key={time}
                onClick={() => handleTimeClick(time)}
                className={`time-button ${selectedTime === time ? 'selected' : ''}`}
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
        <div className="deals-container">
          <h4>{selectedDay} Deals ({selectedTime})</h4>
          {selectedDeals.length > 0 ? (
            <ul className="deals-list">
              {selectedDeals.map((deal, index) => (
                <li key={index} className="deal-item">
                  <p>{deal.category}</p>
                  <p className="deal-price">${deal.price}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No deals available for the selected criteria.</p>
          )}
        </div>
      )}
      
    </div>
  );
};

export default VenueDetails;
