import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Button from "@mui/material/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { NotFoundPage } from "./NotFoundPage";
import { API } from "./global";

export function BookDetail() {
  const { bookid } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState({});
  // const book = bookList[bookid];
  // console.log(book);
  // console.log(book.name);
  // console.log(book.summary);
  // if (!book) {
  //   // navigate ("/404")
  //   return <NotFoundPage />;
  // }

  useEffect(() => {
    fetch(`${API}/books/${bookid}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((bk) => {
        setBook(bk);
      });
  }, []);

  return (
    <div>
      <iframe
        width="100%"
        height="550"
        src={book.trailer}
        title="The Power of Your Subconscious Mind (1963) by Joseph Murphy"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div className="book-detail-container">
        <div className="book-spec">
          <h2 className="book-title">{book.name}</h2>
          <p className="book-rating"> ⭐{book.rating}</p>
        </div>
        <p className="book-summary">{book.summary}</p>
        {/* <button onClick={() => navigate(-1)}>BACK</button> */}
        <Button
          variant="contained"
          startIcon={<ArrowBackIosIcon />}
          onClick={() => navigate(-1)}
        >
          BACK
        </Button>
      </div>
    </div>
  );
}