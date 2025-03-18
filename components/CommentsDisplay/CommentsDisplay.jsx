import React from "react";
import "./CommentsDisplay.scss";

function CommentsDisplay({ comments }) {
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  };

  const sortedComments = [...comments].sort(
    (a, b) => b.timestamp - a.timestamp
  );

  return (
    <div className="comments-display__container">
      <h3 className="comments__title">{comments.length} Comments</h3>
      {sortedComments.map((comment) => (
        <div className="comments-text__container" key={comment.id}>
          <div className="comments-name-date__container">
            <p className="comments-author">{comment.name}</p>
            <p className="comments-date">{formatDate(comment.timestamp)}</p>
          </div>
          <p className="comments-text">{comment.comment}</p>
        </div>
      ))}
    </div>
  );
}

export default CommentsDisplay;
