import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const VenueDetails = () => {
  const [venue, setVenue] = useState(null);
  const [deals, setDeals] = useState([]);
  const { id } = useParams();

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

  if (!venue) return <div>Loading...</div>;

  return (
    <div>
      <Link to="/">Back to Venues</Link>
      <h1>{venue.name}</h1>
      <h2>{venue.neighbourhood}</h2>
      <img src={venue.photo} alt={venue.name} />
      <h4>{venue.address}</h4>
      
      <h3>Deals:</h3>
      <ul>
        {deals.map((deal, index) => (
          <li key={index}>
            <p>Type of Drink: {deal.type_of_drink}</p>
            <p>Category: {deal.category}</p>
            <p>Price: ${deal.price}</p>
            <p>Time: {deal.start} - {deal.end}</p>
            <p>Day: {deal.day}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VenueDetails;