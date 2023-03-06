import React, { useState, useEffect } from "react";
import axios from "axios";
  import { ToastContainer, toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
  import Alerts from "../components/Alert";

  export default function LoginPage() {
    const [email, setmail] = useState("");
    const [password, setpassword] = useState("");
    const [Error, seterror] = useState(false);

    useEffect(() => {
      if (localStorage.getItem("userData") != null) {
        window.location.href = "/";
        console.log("first");
      }
    });

    const errorHandler = () => {
      seterror(true);
    };

    const notifyErr = () => toast.error("Invalid credentials ❗");

    const submitHandler = async () => {
      if (!email || !password) {
        window.alert("Fill all the required fields before submit ❗");
      } else {
        const userData = {
          email,
          password,
        };
        try {
          const response = await axios.post(
            "http://localhost:5000/api/user/login",
            userData
          );
          console.log({
            token: response.data.token,
            data: response.data.userData,
          });
          localStorage.setItem(
            "userData",
            JSON.stringify(response.data.userData)
          );
          localStorage.setItem("token", JSON.stringify(response.data.token));
          window.location.href = "/";
        } catch (error) {
          notifyErr();
          errorHandler();
          console.log(error);
        }
      }
    };

    return (
      <>
        <ToastContainer theme="colored" />
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
              <h2
                className="m-3"
                style={{ fontSize: "30px", fontWeight: "bold" }}
              >
                Login
              </h2>
              {/* {Error ? <Alerts /> : ""} */}
              <div
                style={{
                  alignContent: "center",
                }}
              >
                <input
                  type="email"
                  required
                  placeholder="Email"
                  className="form-control"
                  value={email}
                  onChange={(e) => {
                    setmail(e.target.value);
                  }}
                />

                <input
                  type="password"
                  required
                  placeholder="Password"
                  className="form-control"
                  value={password}
                  onChange={(e) => {
                    setpassword(e.target.value);
                  }}
                />
                <h5
                  className="mt-3"
                  style={{
                    fontSize: "18px",
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    padding: "5px",
                    fontWeight: "bold",
                  }}
                >
                  Forgot Password ? <Link to="/signup">Click Here</Link>
                </h5>
                <button className="btn mt-2" onClick={submitHandler}>
                  <b>Login</b>
                </button>
                <br />
                <br />
                <h5
                  className="m-1"
                  style={{
                    fontSize: "18px",
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    padding: "5px",
                    fontWeight: "bold",
                  }}
                >
                  New User? <Link to="/signup">Create Account</Link>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
