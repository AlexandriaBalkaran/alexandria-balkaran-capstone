import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import VenueDetails from "../../components/VenueDetails/VenueDetails";
import CommentForm from "../../components/CommentForm/CommentForm";


function VenueDealsPage() {
  return (
  <>
  <h1>Venue Deals Page</h1>
  <VenueDetails/>
  <CommentForm   
  // fetchComments={fetchComments} id={venue.venueId}
  />
  </>
  );
}

export default VenueDealsPage;