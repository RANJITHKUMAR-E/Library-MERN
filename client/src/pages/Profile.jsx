import React, { useState } from "react";
import PopUp from "../components/PopUp";
import { Button } from "react-bootstrap";

export default function Profile() {
  const user = JSON.parse(localStorage.getItem("userData"));

  const [name, setName] = useState(user.userName);

  const handleUpdate = () => {
    const uUser = {
      name,
    };
    console.log(user);
  };
  const handleLogout = () => {
    localStorage.clear();
    window.location = "/login";
  };

  return (
    <>
      <div class="container-xl px-4 mt-4">
        <hr class="mt-0 mb-4" />
        <div class="row">
          <div class="col-xl-4">
            <div class="card mb-4 mb-xl-0">
              <div class="card-header">
                <b>Profile Picture</b>
              </div>
              <div class="card-body text-center">
                <img
                  class="img-account-profile rounded-circle mb-2"
                  src="http://bootdey.com/img/Content/avatar/avatar1.png"
                  alt=""
                />
                <div class="large font-italic text-muted mb-4">
                  JPG or PNG no larger than 5 MB
                </div>
                <input type="file" class="form-control" />
              </div>
            </div>
          </div>
          <div class="col-xl-8">
            <div class="card mb-4">
              <div class="card-header">
                <b>Account Details</b>
              </div>
              <div class="card-body">
                <form>
                  <div class="row">
                    <div class="col-4">
                      <label class="large mb-1" for="inputFirstName">
                        Name
                      </label>{" "}
                    </div>
                    <div class="col-8">
                      {" "}
                      <input
                        class="form-control d-inline-flex "
                        id="inputFirstName"
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                        style={{ marginTop: "-2px" }}
                      />
                    </div>
                  </div>
                  <br />
                  <div class="row">
                    <div class="col-4">
                      <label class="large mb-1" for="rollNumber">
                        Roll number
                      </label>{" "}
                    </div>
                    <div class="col-8">
                      {" "}
                      <input
                        class="form-control d-inline-flex "
                        id="rollNumber"
                        type="text"
                        placeholder="Enter your roll no."
                        value={user.rollNo}
                        onChange={(e) => {
                          user.rollNo = e.target.value;
                        }}
                        style={{ marginTop: "-2px" }}
                      />
                    </div>
                  </div>
                  <br />
                  <div class="row">
                    <div class="col-4">
                      <label class="large mb-1" for="email">
                        Email
                      </label>{" "}
                    </div>
                    <div class="col-8">
                      {" "}
                      <input
                        class="form-control d-inline-flex "
                        id="email"
                        type="text"
                        placeholder="Enter your Email Id"
                        value={user.eMail}
                        style={{ marginTop: "-2px" }}
                      />
                    </div>
                  </div>
                  <br />

                  <div class="row">
                    <div class="col-4">
                      <label class="large mb-1" for="Phone number">
                        Phone number
                      </label>{" "}
                    </div>
                    <div class="col-8">
                      {" "}
                      <input
                        class="form-control d-inline-flex "
                        id="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={user.Mobile}
                        style={{ marginTop: "-2px" }}
                      />
                    </div>
                  </div>
                  <br />

                  <div class="row">
                    <div class="col-4">
                      <label class="large mb-1" for="Age">
                        Age
                      </label>{" "}
                    </div>
                    <div class="col-8">
                      {" "}
                      <input
                        class="form-control d-inline-flex "
                        id="phone"
                        type="tel"
                        placeholder="Enter your age"
                        value={user.age}
                        style={{ marginTop: "-2px" }}
                      />
                    </div>
                  </div>
                  <br />

                  <div class="row">
                    <div class="col-4">
                      <label class="large mb-1" for="Department">
                        Department
                      </label>{" "}
                    </div>
                    <div class="col-8">
                      {" "}
                      <input
                        class="form-control d-inline-flex "
                        id="text"
                        type="tel"
                        placeholder="Enter your Department"
                        value={user.department}
                        style={{ marginTop: "-2px" }}
                      />
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                      {/* <PopUp name="Update" fire="update"></PopUp> */}
                      <Button onClick={handleUpdate}>Update</Button>
                      <h2 className="m-2"></h2>
                      {/* <PopUp name="Logout"></PopUp> */}
                      <Button onClick={handleLogout}>Logout</Button>
                    </div>
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
