import React, { useState } from "react";
import { GoogleMap, Marker, InfoWindow, useLoadScript } from "@react-google-maps/api";
import { useNavigate } from "react-router-dom";
import "./Map.scss";

const mapStyle = { width: "100%", height: "100%" };
const defaultCenter = { lat: 43.6532, lng: -79.3832 };

function MapComponent({ venues }) {
  const { isLoaded } = useLoadScript({ googleMapsApiKey: "AIzaSyD8b9KPX5rALeM6knujxXb40HaYTkxXbKE" });
  const navigate = useNavigate();
  const [selectedVenue, setSelectedVenue] = useState(null);

  if (!isLoaded) return <div>Loading map...</div>;

  return (
    <div className="map__container">
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
            onClick={() => {
              setSelectedVenue(venue);
              navigate(`/venue/${venue.id}/deals`);
            }}
            onMouseOver={() => setSelectedVenue(venue)}
            onMouseOut={() => setSelectedVenue(null)}
          >
            {selectedVenue && selectedVenue.id === venue.id && (
              <InfoWindow position={{ lat, lng }}>
                <div className="info-window__container">
                <img src={venue.photo} alt={venue.name} style={{ width: "100px", height: "auto" }} />
                  <h4>{venue.name}</h4>
                  <p>{venue.neighbourhood}</p>
                  <p>{venue.address}</p>
                </div>
              </InfoWindow>
            )}
          </Marker>
        );
      })}
    </GoogleMap>
    </div>
  );
}

export default MapComponent;
