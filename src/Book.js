import { Counter } from "./Counter";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InfoIcon from "@mui/icons-material/Info";
import DeleteIcon from "@mui/icons-material/Delete";
import { API } from "./global";
//BookApp
// book title, poster, summary, rating
export function Book({ book, id, deleteButton, editButton }) {
  const navigate = useNavigate();
  
  const styles = {
    color: book.rating > 8 ? "green" : "red",
    fontSize: "25px",
    fontWeight: "bold",
  };

  //true - visible
  //false - hidden
  const [show, setShow] = useState(true);
  //True - block
  //False - none
  const summaryStyles = {
    display: show ? "block" : "none",
  };

  return (
    <div className="book-container">
      <img className="book-poster" src={book.poster} alt={book.name} />
      <div className="book-spec">
        <h2 className="book-title">
          {book.name} -ID -{id}{" "}
        </h2>
        <p style={styles} className="book-rating">
          {" "}
          ⭐{book.rating}
        </p>
      </div>
      <IconButton
        onClick={() => setShow(!show)}
        aria-label="toggle-description"
        color="primary"
      >
        {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </IconButton>
      {/* //info icon */}
      <IconButton
        onClick={() => navigate(`/book/${id}`)}
        aria-label="toggle-description"
        color="primary"
      >
        <InfoIcon />
      </IconButton>
      
      <p style={summaryStyles} className="book-summary">
        {book.summary}
      </p>
    
      <Counter />
      
      {deleteButton} {editButton}
    </div>
  );
}