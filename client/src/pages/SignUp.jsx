import React, { useState } from "react";
import axios from "axios";

export default function SignUpPage() {
  // const [userData, setData] = useState({
  //   name: "",
  //   rollNo: "",
  //   email: "",
  //   mobile: "",
  //   department: "",
  //   password: "",
  //   confirmPassWord: "",
  // });

  const [name, setname] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [email, setmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [dept, setDept] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");

  const submitHandler = async () => {
    if (
      !name ||
      !rollNo ||
      !email ||
      !mobile ||
      !dept ||
      !password ||
      !cpassword
    ) {
      window.alert("Fill all the required fields before submit ❗");
    } else if (password !== cpassword) {
      window.alert("Password not matched ❗");
    } else {
      const userData = {
        name,
        rollNo,
        password,
        email,
        mobile,
        dept,
      };
      window.alert("Form submitted successfully ✔");
      try {
        const response = await axios.post("/api/user/signup", userData);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <div className="rows d-md-flex h-md-100 align-items-center">
        <div className="col-md-7 bg-indigo h-md-100">
          <div className="text-black d-md-flex align-items-center h-100 text-center justify-content-center">
            <div className="logoarea pt-5 pb-5">
              <h2
                className="m-10 text-left"
                style={{ fontSize: "25px", fontWeight: "600" }}
              >
                Hi, Welcome to
              </h2>

              <br />
              <h2
                className="m-8"
                style={{ fontSize: "25px", fontWeight: "600" }}
              >
                ONLINE LIBRARY MANAGEMENT SYSTEM
              </h2>
              <br />
              <div className="col-md-5 mt-3 text-left  p-3 mb-5 w-100">
                <img
                  src="https://iili.io/HEWQdMX.png"
                  alt="..."
                  className="img-fluid img-responsive"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4 h-md-100 text-center justify-content-center p-10 m-0">
          <div
            className="d-md-flex h-md-100 p-5"
            style={{ backgroundColor: "rgba(239, 239, 239, 1)" }}
          >
            <div>
              <h2 className="m-2" style={{ fontSize: "35px" }}>
                SignUp
              </h2>
              <input
                type="text"
                required
                placeholder="Name"
                className="form-control  d-inline-flex p-2 "
                value={name}
                onChange={(e) => {
                  setname(e.target.value);
                }}
              />

              <input
                type="text"
                required
                placeholder="Roll Number"
                className="form-control d-inline-flex p-2"
                value={rollNo}
                onChange={(e) => {
                  setRollNo(e.target.value);
                }}
              />

              <input
                type="email"
                required
                placeholder="Email-Id"
                className="form-control d-inline-flex p-2"
                value={email}
                onChange={(e) => {
                  setmail(e.target.value);
                }}
              />

              <input
                type="tel"
                required
                placeholder="Mobile Number"
                className="form-control d-inline-flex p-2"
                value={mobile}
                onChange={(e) => {
                  setMobile(e.target.value);
                }}
              />

              <select
                className="form-select d-inline-flex p-2"
                required
                onChange={(e) => {
                  setDept(e.target.value);
                }}
              >
                <option value="" disabled selected>
                  Select your department
                </option>
                <option value="CSE">CSE</option>
                <option value="EEE">EEE</option>
                <option value="ECE">ECE</option>
                <option value="EIE">EIE</option>
              </select>

              <input
                type="password"
                required
                placeholder="Password"
                className="form-control d-inline-flex p-2"
                value={password}
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              />

              <input
                type="password"
                required
                placeholder="Confirm Password"
                className="form-control d-inline-flex p-2"
                value={cpassword}
                onChange={(e) => {
                  setcpassword(e.target.value);
                }}
              />
              <br />
              <br />
              <button className="btn mt-2" onClick={submitHandler}>
                SignUp
              </button>
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
                {" "}
                <br />
                Already User?{" "}
                <a
                  href="/register"
                  style={{
                    textDecoration: "none",
                    color: "rgb(0, 0, 0)",
                  }}
                >
                  Login
                </a>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
