import React from "react";
import PopUp from '../../components/PopUp';
import Navbar from "../../components/Navbar";

export default function Profile() {
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
                  src="https://m.media-amazon.com/images/I/41Oc1U2riIL.jpg"
                  alt=""
                />
                <div class="small font-italic text-muted mb-4">
                  JPG or PNG no larger than 5 MB
                </div>
                <input type="file" class="form-control" />
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
                        class="form-control d-inline-flex "
                        id="bookName"
                        type="text"
                        placeholder="Enter the book name"
                        style={{ marginTop: "-2px" }}
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
                      />
                    </div>
                  </div>
                  <br />

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
                      />
                    </div>
                  </div>
                  <br />

                  <div class="row">
                    <div class="col-6">
                      <label class="small mb-1" for="Price">
                        Department
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
                      />
                    </div>
                  </div>
                  <br />
                  <div className="row w-100 justify-content-center">
                    <PopUp name="Add Book"></PopUp>
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
