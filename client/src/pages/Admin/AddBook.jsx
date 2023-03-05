import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import FileBase64 from "react-file-base64";

export default function AddBook() {
  const [bookName, setbookName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [authorName, setAuthor] = useState("");
  const [pages, setPages] = useState("");
  const [publishDate, setPublishDate] = useState("");
  const [bookCount, setbookCount] = useState("");
  const [price, setPrice] = useState("");
  const [bookImage, setbookImage] = useState("");

  useEffect(() => {
    console.log(bookImage);
  }, [bookImage]);

  const submitHandler = async () => {
    if (!bookName || !category || !authorName || !publishDate || !bookCount) {
      window.alert("Fill all the required fields before submit ❗");
    } else {
      const bookData = {
        bookName,
        description,
        bookImage,
        category,
        authorName,
        pages,
        publishDate,
        bookCount,
        price,
      };
      window.alert("Form submitted successfully ✔");
      try {
        const response = await axios.post("/api/book/", bookData);
        console.log(response);
        window.location.reload(false);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <div class="container-xl px-4 mt-4">
        <hr class="mt-0 mb-4" />
        <div class="row">
          <div class="col-xl-4">
            <div class="card mb-4 mb-xl-0">
              <div class="card-header">Book Picture</div>
              <div class="card-body text-center">
                <img
                  class="img-account-profile mb-2 w-50"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1H4v_gFdXHStTZr3gcLtswJa1evCqdqoF0g&usqp=CAU"
                  alt=""
                />
                <div class="small font-italic text-muted mb-4">
                  JPG or PNG no larger than 5 MB
                </div>
                <FileBase64
                  className="form-control"
                  multiple={false}
                  onDone={({ base64 }) => setbookImage(base64)}
                />
                <h5>or</h5>
                <input
                  class="form-control d-inline-flex"
                  id="bookName"
                  type="text"
                  placeholder="Enter the link"
                  style={{ marginTop: "-2px" }}
                  value={bookImage}
                  onChange={(e) => {
                    setbookImage(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          <div class="col-xl-8">
            <div class="card mb-4">
              <div class="card-header">Add Book Details</div>
              <div class="card-body">
                <form>
                  <div class="row">
                    <div class="col-6">
                      <label class="small mb-1" for="bookName">
                        Book Name
                      </label>{" "}
                    </div>
                    <div class="col-6">
                      {" "}
                      <input
                        class="form-control d-inline-flex"
                        id="bookName"
                        type="text"
                        placeholder="Enter the book name"
                        style={{ marginTop: "-2px" }}
                        value={bookName}
                        onChange={(e) => {
                          setbookName(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <br />
                  <div class="row">
                    <div class="col-6">
                      <label class="small mb-1" for="category">
                        Description
                      </label>{" "}
                    </div>
                    <div class="col-6">
                      {" "}
                      <textarea
                        class="form-control d-inline-flex "
                        id="category"
                        type="text"
                        placeholder="Enter the book category"
                        style={{ marginTop: "-2px" }}
                        value={description}
                        onChange={(e) => {
                          setDescription(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <br />
                  <div class="row">
                    <div class="col-6">
                      <label class="small mb-1" for="category">
                        Category
                      </label>{" "}
                    </div>
                    <div class="col-6">
                      {" "}
                      <input
                        class="form-control d-inline-flex "
                        id="category"
                        type="text"
                        placeholder="Enter the book category"
                        style={{ marginTop: "-2px" }}
                        value={category}
                        onChange={(e) => {
                          setCategory(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <br />
                  <div class="row">
                    <div class="col-6">
                      <label class="small mb-1" for="authorName">
                        Author
                      </label>{" "}
                    </div>
                    <div class="col-6">
                      {" "}
                      <input
                        class="form-control d-inline-flex "
                        id="authorName"
                        type="text"
                        placeholder="Enter the Author"
                        style={{ marginTop: "-2px" }}
                        value={authorName}
                        onChange={(e) => {
                          setAuthor(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <br />
                  <div class="row">
                    <div class="col-6">
                      <label class="small mb-1" for="category">
                        No of pages
                      </label>{" "}
                    </div>
                    <div class="col-6">
                      {" "}
                      <input
                        class="form-control d-inline-flex "
                        id="category"
                        type="number"
                        placeholder="Enter the book category"
                        style={{ marginTop: "-2px" }}
                        value={pages}
                        onChange={(e) => {
                          setPages(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <br></br>

                  <div class="row">
                    <div class="col-6">
                      <label class="small mb-1" for="publishedDate">
                        Published Date
                      </label>{" "}
                    </div>
                    <div class="col-6">
                      {" "}
                      <input
                        class="form-control d-inline-flex "
                        id="date"
                        type="date"
                        placeholder="Enter the book published date"
                        style={{ marginTop: "-2px" }}
                        value={publishDate}
                        onChange={(e) => {
                          setPublishDate(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <br />

                  <div class="row">
                    <div class="col-6">
                      <label class="small mb-1" for="NumberOfBooks">
                        Number of Books
                      </label>{" "}
                    </div>
                    <div class="col-6">
                      {" "}
                      <input
                        class="form-control d-inline-flex "
                        id="NumberOfBooks"
                        type="number"
                        placeholder="Enter the number of books"
                        style={{ marginTop: "-2px" }}
                        value={bookCount}
                        onChange={(e) => {
                          setbookCount(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <br />

                  <div class="row">
                    <div class="col-6">
                      <label class="small mb-1" for="Price">
                        Price
                      </label>{" "}
                    </div>
                    <div class="col-6">
                      {" "}
                      <input
                        class="form-control d-inline-flex "
                        id="Price"
                        type="number"
                        placeholder="Enter the Price"
                        style={{ marginTop: "-2px" }}
                        value={price}
                        onChange={(e) => {
                          setPrice(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <br />
                  <div className="row w-100 justify-content-center">
                    <Button onClick={submitHandler}>Add Book</Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
