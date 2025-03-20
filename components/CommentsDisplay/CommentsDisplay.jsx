import React, { useState } from "react";
import axios from "axios";
import "./CommentsDisplay.scss";

function CommentsDisplay({ comments, fetchComments, id, commentId }) {
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [updatedComment, setUpdatedComment] = useState("");

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric", 
        month: "long", 
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
    });

  };

const sortedComments = [...comments].sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at)
  );

  const handleEditClick = (comment) => {
    setEditingCommentId(comment.id);
    setUpdatedComment(comment.comment);
  };

  const handleCancelEdit = () => {
    setEditingCommentId(null);
    setUpdatedComment("");
  };

  const handleUpdateComment = async (commentId) => {
    try {
      await axios.put(`http://localhost:8080/venues/${id}/comments/${commentId}`, {
        comment: updatedComment,
      });

      fetchComments();
      setEditingCommentId(null); 
    } catch (error) {
      console.error("Error updating comment:", error);
    }
  };

  const handleDeleteComment = async (commentId) => {
    try {
      await axios.delete(`http://localhost:8080/venues/${id}/comments/${commentId}`);
      fetchComments();
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };


  return (
    <div className="comments-display__container">
      <h3 className="comments__title">Reviews</h3>
      {sortedComments.map((comment) => (
        <div className="comments-text__container" key={comment.id}>
          <div className="comments-name-date__container">
            <p className="comments-author">{comment.name}</p>
            <p className="comments-date">{formatDate(comment.created_at)}</p>
          </div>

          {editingCommentId === comment.id ? (
            <div className="comments__container">
              <input
                type="text"
                className="comments-edit__input"
                value={updatedComment}
                onChange={(e) => setUpdatedComment(e.target.value)}
              />
              <button
                className="comments__button-save"
                onClick={() => handleUpdateComment(comment.id)}
              >
                Save
              </button>
              <button
                className="comments__button-cancel"
                onClick={handleCancelEdit}
              >
                Cancel
              </button>
            </div>
          ) : (
            <>
              <p className="comments-text">{comment.comment}</p>
              <button
                className="comments__button-edit"
                onClick={() => handleEditClick(comment)}
              >
                Edit
              </button>
              <button
                className="comments__button-delete"
                onClick={() => handleDeleteComment(comment.id)}
              >
                Delete
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default CommentsDisplay;