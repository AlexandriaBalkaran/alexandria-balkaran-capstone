import React, { useState, useEffect } from "react";

const VenueDeals = ({ venueId }) => {
  const [deals, setDeals] = useState([]);

  // Fetch deals when the venueId changes
  useEffect(() => {
    const fetchDeals = async () => {
      try {
        const response = await fetch(`http://localhost:8080/deals/${venueId}`);
        const data = await response.json();
        setDeals(data);
      } catch (e) {
        console.error("Error fetching deals:", e);
        setDeals([]);
      }
    };

    if (venueId) {
      fetchDeals();
    }
  }, [venueId]);

  if (deals.length === 0) return <p>No deals available for this venue.</p>;

  return (
    <div>
      <h2>Deals for Selected Venue</h2>
      <ul>
        {deals.map((deal) => (
          <li key={deal.id}>
            <h3>{deal.category}</h3>
            <p>Type of Drink: {deal.type_of_drink}</p>
            <p>Price: ${deal.price}</p>
            <p>Deal Time: {deal.start} - {deal.end}</p>
            <p>Available on: {deal.day}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VenueDeals;