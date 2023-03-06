import React from "react";
import axios from "axios";
import { Table } from "react-bootstrap";

export default function BookList(props) {
  var cnt = 0;
  var books = Array.from(props.books);
  books = books.reverse();

  return (
    <>
      <h4 className="p-3 my-3 bg-primary text-white">Books List </h4>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>s.no</th>
            <th>Book Image</th>
            <th>Book Details</th>
            <th>Category & Description</th>
            <th>Stock Details</th>
            <th>Tools</th>
          </tr>
        </thead>
        <tbody>
          {books &&
            books.map((book) => {
              cnt += 1;
              return (
                <tr>
                  <td>{cnt}</td>
                  <td>
                    <img
                      src={book.bookImage}
                      alt=""
                      style={{ height: "20vh" }}
                    />
                  </td>
                  <td style={{ width: "45vh" }}>
                    <b>Book name</b> : {book.bookName}
                    <br />
                    <b>Author name</b> : {book.authorName}
                    <br />
                    <b>No of pages</b> : {book.pages}
                    <br />
                    <b>Published on</b> : {book.publishedDate}
                    <br />
                    <b>Price</b> : ₹ {book.price}
                  </td>
                  <td style={{ width: "80vh" }}>
                    <b>Category</b> : {book.category}
                    <br />
                    <b>Description</b> : {book.description}
                  </td>
                  <td>
                    <b>Book Count</b> : {book.bookCount}
                    <br />
                    <b>Added Date</b> : {book.addedDate.substring(0, 10)}
                    <br />
                    <b>No of pages</b> : {book.pages}
                  </td>
                  <td>
                    <i className="fa fa-pen p-2 m-2 bg-primary text-light"></i>
                    <i
                      className="fa fa-trash p-2 m-2 bg-danger text-light"
                      onClick={async () => {
                        try {
                          const resp = await axios.delete(
                            `/api/book/${book._id}`
                          );
                          console.log(resp);
                          window.location.reload(false);
                        } catch (err) {
                          console.log(err);
                        }
                      }}
                    ></i>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </>
  );
}
