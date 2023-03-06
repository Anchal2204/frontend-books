import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { API } from "./global";

export function EditBook() {
  const [book, setBook] = useState(null);

  const { bookid } = useParams();

  useEffect(() => {
    fetch(`${API}/books/${bookid}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((bk) => {
        setBook(bk);
      });
  }, []);

  return book ? <EditBookForm book={book} /> : "Loading...";
}

function EditBookForm({ book }) {
  const [name, setName] = useState(book.name);
  const [poster, setPoster] = useState(book.poster);
  const [rating, setRating] = useState(book.rating);
  const [summary, setSummary] = useState(book.summary);
  const [trailer, setTrailer] = useState(book.trailer);
  const navigate = useNavigate();
  return (
    <div className="add-book-form">
      <TextField
        value={name}
        id="outlined-basic"
        label="Name"
        variant="outlined"
        placeholder="Enter a Name"
        onChange={(event) => setName(event.target.value)}
      />

      {/* <input
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Enter a Name"
                /> */}
      <TextField
        value={poster}
        id="outlined-basic"
        label="Poster"
        variant="outlined"
        placeholder="Enter a Poster"
        onChange={(event) => setPoster(event.target.value)}
      />
      <TextField
        value={rating}
        id="outlined-basic"
        label="Rating"
        variant="outlined"
        placeholder="Enter a Rating"
        onChange={(event) => setRating(event.target.value)}
      />
      <TextField
        value={summary}
        id="outlined-basic"
        label="Summary"
        variant="outlined"
        placeholder="Enter a Summary"
        onChange={(event) => setSummary(event.target.value)}
      />
      <TextField
        value={trailer}
        id="outlined-basic"
        label="Trailer"
        variant="outlined"
        placeholder="Enter a Trailer"
        onChange={(event) => setTrailer(event.target.value)}
      />
      {/* <Button variant="contained">Add Book</Button> */}
      <Button
        onClick={() => {
          const updatedBook = {
            name: name,
            poster: poster,
            rating: rating,
            summary: summary,
            trailer: trailer,
          };
          //1. method - PUT and id
          //2. body - data - JSON
          //3 . Headers - JSON
          fetch(`${API}/books/${book.id}`, {
            method: "PUT",
            body: JSON.stringify(updatedBook),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((response) => response.json())
            .then(() => navigate("/book"));
        }}
        variant="contained"
      >
        SAVE
      </Button>
    </div>
  );
}