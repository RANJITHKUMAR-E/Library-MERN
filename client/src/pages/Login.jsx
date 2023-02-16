import React, { useState, useEffect } from "react";
import axios from "axios";

export default function LoginPage() {

  const [email, setmail] = useState("");
  const [password, setpassword] = useState("");

  const submitHandler = async () => {
    if (
      !email ||
      !password 
    ) {
      window.alert("Fill all the required fields before submit ❗");
    } else {
      const userData = {
        email,
        password,
      };
      window.alert("Form submitted successfully ✔");
      try {
        const response = await axios.post("/api/user/login", userData);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <div className="row justify-content-center mt-5">
        <div className="col-6 mt-5 text-center">
          <h2 className="m-8" style={{ fontSize: "4vh" }}>
            ONLINE LIBRARY MANAGEMENT SYSTEM
          </h2>
        </div>
      </div>
      <br />
      <div className="row  mt-5 ">
        <div className="col-md-6 mt-3 d-md-flex align-items-center justify-content-center">
          <img src="https://iili.io/HEMIGwB.png" alt="..." />
        </div>

        <div className="col-md-4 text-center  p-5">
          <div
            className="shadow-lg p-5"
            style={{
              backgroundColor: "rgba(170, 223, 255, 1)",
              borderRadius: "10px",
            }}
          >
            <h2 className="m-2" style={{ fontSize: "35px" }}>
              Login
            </h2>
            <div
              style={{
                alignContent: "center",
              }}
            >
              <input
                type="email"
                required
                placeholder="Email"
                className="form-control text-center d-inline-flex p-2"
                value={email}
                onChange={(e) => {
                  setmail(e.target.value);
                }}
              />

              <input
                type="password"
                required
                placeholder="Password"
                className="form-control text-center d-inline-flex p-2"
                value={password}
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              />
              <h5
                className="m-2"
                style={{
                  fontFamily: "Inter",
                  fontStyle: "normal",
                  padding: "5px",
                  fontWeight: "bold",
                }}
              >
                Forgot Password ?{" "}
                <a
                  href="/register"
                  style={{
                    textDecoration: "none",
                    color: "rgba(0, 0, 0, 0.4)",
                  }}
                >
                  Click Here
                </a>
              </h5>
              <button className="btn mt-2" onClick={submitHandler}>Login</button>
              <br />
              <h5
                className="m-2"
                style={{
                  fontFamily: "Inter",
                  fontStyle: "normal",
                  padding: "5px",
                  fontWeight: "bold",
                }}
              >
                New User?{" "}
                <a
                  href="/register"
                  style={{
                    textDecoration: "none",
                    color: "rgba(0, 0, 0, 0.4)",
                  }}
                >
                  Create Account
                </a>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}