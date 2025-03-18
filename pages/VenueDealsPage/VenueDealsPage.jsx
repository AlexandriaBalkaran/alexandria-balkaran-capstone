import { useParams } from "react-router-dom";
import axios from "axios";
import VenueDetails from "../../components/VenueDetails/VenueDetails";
import CommentForm from "../../components/CommentForm/CommentForm";

function VenueDealsPage() {
  const { id } = useParams();

  function fetchComments() {
    
  }

  return (
    <>
      <h1>Venue Deals Page</h1>
      <VenueDetails id={id} />
      <CommentForm fetchComments={fetchComments} id={id} />
    </>
  );
}

export default VenueDealsPage;
