// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import VenueDetails from "../../components/VenueDetails/VenueDetails";
// import CommentForm from "../../components/CommentForm/CommentForm";
// import CommentsDisplay from "../../components/CommentsDisplay/CommentsDisplay";

// function VenueDealsPage() {
//   const { id } = useParams();
//   const [comments, setComments] = useState([]);
//   const [favourites, setFavourites] = useState([]);

//   useEffect(() => {
//     fetchComments();
//   }, [id]);

//   async function fetchComments() {
//     try {
//       const response = await axios.get(`http://localhost:8080/venues/${id}/comments`);
//       setComments(response.data);
//     } catch (error) {
//       console.error("Error fetching comments:", error);
//     }
//   }

//   const handleFavouriteClick = (venue) => {
//     setFavourites((prevFavourites) => {
//       const isAlreadyFavourite = prevFavourites.some((fav) => fav.id === venue.id);
//       return isAlreadyFavourite
//         ? prevFavourites.filter((fav) => fav.id !== venue.id)
//         : [...prevFavourites, venue];
//     });
//   };

//   return (
//     <>
//       <VenueDetails id={id} />
//       <CommentForm fetchComments={fetchComments} id={id} />
//       <CommentsDisplay comments={comments} fetchComments={fetchComments} id={id} />
//     </>
//   );
// }

// export default VenueDealsPage;


import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import VenueDetails from "../../components/VenueDetails/VenueDetails";
import CommentForm from "../../components/CommentForm/CommentForm";
import CommentsDisplay from "../../components/CommentsDisplay/CommentsDisplay";

function VenueDealsPage() {
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    fetchComments();
    loadFavourites();
  }, [id]);

  async function fetchComments() {
    try {
      const response = await axios.get(`http://localhost:8080/venues/${id}/comments`);
      setComments(response.data);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  }

  // ✅ Load favourites from localStorage
  const loadFavourites = () => {
    const savedFavourites = JSON.parse(localStorage.getItem("favourites")) || [];
    setFavourites(savedFavourites);
  };

  // ✅ Toggle favourite and update localStorage
  const handleFavouriteClick = (venue) => {
    setFavourites((prevFavourites) => {
      const updatedFavourites = prevFavourites.some((fav) => fav.id === venue.id)
        ? prevFavourites.filter((fav) => fav.id !== venue.id) // Remove if already a favourite
        : [...prevFavourites, venue]; // Add if not a favourite

      localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
      return updatedFavourites;
    });
  };

  return (
    <>
      <VenueDetails 
        id={id} 
        favourites={favourites} 
        onFavouriteClick={handleFavouriteClick} 
      />
      <CommentForm fetchComments={fetchComments} id={id} />
      <CommentsDisplay comments={comments} fetchComments={fetchComments} id={id} />
    </>
  );
}

export default VenueDealsPage;
