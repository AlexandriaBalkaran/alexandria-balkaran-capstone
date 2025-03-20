import React from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useNavigate } from "react-router-dom";

const mapStyle = { width: "100%", height: "400px" };
const defaultCenter = { lat: 43.6532, lng: -79.3832 }; // Default to Toronto

function MapComponent({ venues }) {
  const { isLoaded } = useLoadScript({ googleMapsApiKey: "AIzaSyD8b9KPX5rALeM6knujxXb40HaYTkxXbKE" });
  const navigate = useNavigate();

  if (!isLoaded) return <div>Loading map...</div>;

  return (
    <GoogleMap mapContainerStyle={mapStyle} center={defaultCenter} zoom={12}>
      {venues.map((venue) => {
        const lat = parseFloat(venue.lat);
        const lng = parseFloat(venue.lng);

        if (isNaN(lat) || isNaN(lng)) {
          console.error(`Invalid coordinates for venue ${venue.name}: lat = ${venue.lat}, lng = ${venue.lng}`);
          return null;
        }

        return (
          <Marker 
            key={venue.id} 
            position={{ lat, lng }} 
            onClick={() => navigate(`/venue/${venue.id}/deals`)} 
          />
        );
      })}
    </GoogleMap>
  );
}

export default MapComponent;
