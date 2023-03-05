import { Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, Link } from "react-router-dom";

import BookList from "./bookList";
import UserList from "./userList";

export default function AdminDashboard() {
  const [users, setUsers] = useState({});
  const [books, setBooks] = useState({});

  useEffect(() => {
    if (localStorage.getItem("userData") == null) {
      window.location.href = "/login";
    }
  });

  try {
    useEffect(() => {
      axios.get("/api/book/").then((res) => setBooks(res.data.data));
    }, []);
  } catch (error) {
    console.log(error);
  }
  try {
    useEffect(() => {
      axios.get("/api/user/").then((res) => setUsers(res.data.data));
    }, []);
  } catch (error) {
    console.log(error);
  }

  const getBooks = async () => {
    try {
      const response = await axios.get("/api/book/");
      setBooks(response.data.data);
      console.log(books);
    } catch (error) {
      console.log(error);
    }
  };
  const getUsers = async () => {
    try {
      const response = await axios.get("/api/user/");
      setUsers(response.data.data);
      console.log(users);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <center>
        <div className="row">
          <div className="col-md-12 py-2 justify-content-center">
            <img
              src="https://img.freepik.com/premium-vector/admin-panel_203633-463.jpg?w=740"
              style={{ height: "30vh" }}
              className="adminImg"
            />
            <br />
          </div>
        </div>
        <div className="row tools">
          <div className="col-lg-12 justify-content-center">
            <Link className="linkStyle" to="/dashboard/users">
              <Button onClick={getUsers}>Users List</Button>
            </Link>
            <a className="linkStyle" href="/dashboard/books">
              <Button onClick={getBooks}>Book List</Button>
            </a>
            <Link className="linkStyle" to="/dashboard/addBook">
              <Button>Add Book</Button>
            </Link>
            <Link className="linkStyle" to="/dashboard/history">
              <Button>Book History</Button>
            </Link>
          </div>

          <div className="w-100 justify-content-center">
            <Routes>
              <Route path="books" exact element={<BookList books={books} />} />
              <Route path="users" exact element={<UserList users={users} />} />
            </Routes>
          </div>
        </div>
      </center>
    </>
  );
}
