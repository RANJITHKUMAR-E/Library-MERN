import React from "react";


export default function LoginPage() {



  return (
    <>
      <div className="row justify-content-center mt-5">
        <div className="col-6 mt-5 text-center" >
          <h2 className="m-8" style={{   fontSize: "25px" }}>
            ONLINE LIBRARY MANAGEMENT SYSTEM
          </h2>
        </div> 
      </div>
<br />
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-3 text-left  p-3 mb-5 ">
        <img src="https://iili.io/HEMIGwB.png" alt="..."  style={{width:"350px"}}/>
        </div>

        <div className="col-md-5 mt-3 text-center shadow-lg p-3 mb-5" style={{backgroundColor:"rgba(170, 223, 255, 1)", borderRadius:"10px"}} >
          <h2 className="m-2" style={{ fontSize: "35px"}}>
            Login
          </h2>
        <div className="">
            <input 
              type="text"
              required
              placeholder="Email"
              className="form-control text-center d-inline-flex p-2" style={{width:"300px"}}
            />

            <input
              type="text"
              required
              placeholder="Password"
              className="form-control text-center d-inline-flex p-2" style={{width:"300px"}}
              
            />
            <h5 className="m-2" style={{fontFamily: 'Inter',
fontStyle: "normal" ,padding:"5px", fontWeight:"bold"}}>
                  Forgot Password ?{" "}
                  <a href="/register" style={{ textDecoration: "none",color:"rgba(0, 0, 0, 0.4)" }}>
                    Click Here
                  </a>
                </h5>
            <button className="btn mt-2" >
              Login
            </button>
                <br />
                <h5 className="m-2" style={{fontFamily: 'Inter',
fontStyle: "normal" ,padding:"5px", fontWeight:"bold"}}>
                  New User? {" "}
                  <a href="/register" style={{ textDecoration: "none" ,color:"rgba(0, 0, 0, 0.4)"}}>
                    Create Account
                  </a>
                </h5>
          </div>
        </div>
      </div>
    </>
  );
}
