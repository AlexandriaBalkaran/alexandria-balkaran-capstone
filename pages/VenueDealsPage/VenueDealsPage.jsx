import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import VenueDetails from "../../components/VenueDetails/VenueDetails";
// import CommentForm from "../../components/CommentForm/CommentForm";
// import CommentsDisplay from "../../components/CommentsDisplay/CommentsDisplay";

function VenueDealsPage() {
  const { id } = useParams();
  const [comments, setComments] = useState([]);

  async function fetchComments() {
  //   try {
  //     const response = await axios.get(`http://localhost:8080/venues/${id}/comments`);
  //     setComments(response.data);
  //   } catch (error) {
  //     console.error("Error fetching comments:", error);
  //   }
  // }

  // useEffect(() => {
  //   fetchComments();
  // }, [id]);
  }

  return (
    <>
      <h1>Venue Deals Page</h1>
      <VenueDetails id={id} />
      {/* <CommentForm fetchComments={fetchComments} id={id} /> */}
      {/* <CommentsDisplay comments={comments} id={id} /> */}
    </>
  );
}

export default VenueDealsPage;
