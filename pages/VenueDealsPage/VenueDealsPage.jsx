import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import VenueDetails from "../../components/VenueDetails/VenueDetails";
import CommentForm from "../../components/CommentForm/CommentForm";
import CommentsDisplay from "../../components/CommentsDisplay/CommentsDisplay";

function VenueDealsPage() {
  const { id } = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchComments();
  }, [id]);

  async function fetchComments() {
    try {
      const response = await axios.get(`http://localhost:8080/venues/${id}/comments`);
      setComments(response.data);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  }

  return (
    <>
      <VenueDetails id={id} />
      <CommentForm fetchComments={fetchComments} id={id} />
      <CommentsDisplay comments={comments} id={id} />
    </>
  );
}

export default VenueDealsPage;
