import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import VenueDetails from "../../components/VenueDetails/VenueDetails";


function VenueDealsPage() {
  return (
  <>
  <h1>Venue Deals Page</h1>
  <VenueDetails/>
  </>
  );
}

export default VenueDealsPage;