import { useState } from "react";
import "./CommentForm.scss";
import axios from "axios";

function CommentForm({ fetchComments, id }) {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [error, setError] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
    setError(false);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
    setError(false);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(true);
    if (name.trim() === "" || comment.trim() === "") {
      return;
    }

    try {
      await axios.post(`http://localhost:8080/venues/${id}/comments`, {
        name,
        comment,
      });

      fetchComments();
      setName("");
      setComment("");
      setError(false);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="form__container">
        Name{" "}
        <input
          type="text"
          name="input-name"
          onChange={handleNameChange}
          value={name}
          className={`form__name ${
            error && name.trim("") === "" ? "form__name--invalid" : ""
          }`}
        />
      </label>
      <label className="form__container">
        Review{" "}
        <input
          type="textarea"
          name="input-comment"
          onChange={handleCommentChange}
          value={comment}
          className={`form__comment ${
            error && comment.trim("") === "" ? "form__comment--invalid" : ""
          }`}
        />
      </label>
      <div className="submit__container">
        <button className="submit__button" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}

export default CommentForm;
