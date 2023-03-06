import { Book } from "./Book";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { API } from "./global";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
// {book.name} rating -{book.rating} summary -{book.summary}
export function BookList() {
  // const bookList = INITIAL_BOOK_LIST;
  const [bookList, setBookList] = useState([]);
  const navigate = useNavigate();
  const getBooks = () => {
    fetch(`${API}/books`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((bkdta) => setBookList(bkdta));
  };

  useEffect(() => getBooks(), []);

  return (
    <div className="add-book-form">
      <div className="book-list">
        {bookList.map((bk, index) => (
          <Book
            key={bk.id}
            book={bk}
            id={bk.id}
            // deleteButton={
            //   <IconButton color="error"
            //   onClick={() =>  {
            //     let copyBookList = [...bookList];
            //     let removedBook = copyBookList.splice(index, 1);
            //     console.log(removedBook, index)
            //     setBookList(copyBookList)
            //   }}>
            //     <DeleteIcon />
            //   </IconButton>
            // }

            deleteButton={
              <IconButton
                onClick={() => {
                  fetch(`${API}/books/${bk.id}`, {
                    method: "DELETE",
                  }).then(() => getBooks());
                }}
                color="error"
              >
                <DeleteIcon />
              </IconButton>
            }
            editButton={
              <IconButton
                onClick={() => {
                  navigate(`/book/edit/${bk.id}`);
                }}
                color="secondary"
              >
                <EditIcon />
              </IconButton>
            }
          />
        ))}
      </div>
    </div>
  );
}

//EDIT book
//method - PUT
// combination of AddBook + BookDetail