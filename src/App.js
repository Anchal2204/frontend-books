import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";
import { AddColor } from "./AddColor";
import { ColorBox } from "./ColorBox"; //named import
import { UserList } from "./UserList";
import { Home } from "./Home";
import { BookList } from "./BookList";
import { BookDetail } from "./BookDetail";
import { NotFoundPage } from "./NotFoundPage";
import { AddBook } from "./AddBook";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Paper from "@mui/material/Paper";
import { EditBook } from "./EditBook";
import { BasicForm } from "./BasicForm";



function App() {
  //Lifting the state up -> Lifted from child to parent
  const [bookList, setBookList] = useState([]);
  const [mode, setMode] = useState("light");
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const navigate = useNavigate();
  //JSX starts
  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={4} />
      <CssBaseline />
      <div>
        <AppBar position="static">
          <Toolbar>
            <Button color="inherit" onClick={() => navigate("/")}>
              Home
            </Button>
            <Button color="inherit" onClick={() => navigate("/book")}>
              Books
            </Button>
            <Button color="inherit" onClick={() => navigate("/addcolor")}>
              Add Color
            </Button>
            <Button color="inherit" onClick={() => navigate("/user")}>
              User List
            </Button>
            <Button color="inherit" onClick={() => navigate("/book/add")}>
              AddBook
            </Button>
            <Button color="inherit" onClick={() => navigate("/basic-form")}>
              BasicForm
            </Button>
            <Button
              startIcon={
                mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />
              }
              color="inherit"
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
            >
              {mode === "light" ? "dark" : "light"} mode
            </Button>
          </Toolbar>
        </AppBar>

        <Routes>
          {/* //DRY - Do not repeat yourself */}
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<BookList />} />
          {/* dynamically matching route */}
          <Route path="/book/:bookid" element={<BookDetail />} />
          <Route path="/book/add" element={<AddBook />} />
          <Route path="/book/edit/:bookid" element={<EditBook />} />
          <Route path="/addcolor" element={<AddColor />} />
          <Route path="/user" element={<UserList />} />
          <Route path="/basic-form" element={<BasicForm />} />
          <Route path="/novel" element={<Navigate replace to="/book" />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate replace to="/404" />} />
        </Routes>
      </div>
      <Paper />
    </ThemeProvider>
  );
  //JSX Ends
}

export default App;
