import React from "react";


export default function SignUpPage() {
  return (
    <>
<div class="d-md-flex h-md-100 align-items-center">

<div class="col-md-6 p-0 bg-indigo h-md-100">
    <div class="text-black d-md-flex align-items-center h-100 p-5 text-center justify-content-center">
        <div class="logoarea pt-5 pb-5">
            <h2 className="m-10 text-left" style={{ fontSize: "25px"}}>
                Hi, Welcome to
            </h2><br />
            <h2 className="m-8" style={{   fontSize: "25px" }}>
            ONLINE LIBRARY MANAGEMENT SYSTEM
            </h2><br />   
                <div className="col-md-5 mt-3 text-left  p-3 mb-5 ">
                <img src="https://iili.io/HEWQdMX.png" alt="..."  class="img-fluid img-responsive" />
                </div>
        </div>
    </div>
</div>

<div class="col-md-6 p-0 h-md-100 text-center justify-content-center" style={{backgroundColor:"rgba(239, 239, 239, 1)"}}>
    <div class="d-md-flex h-md-100 p-5 ">
    <div>
        <h2 className="m-2" style={{ fontSize: "35px"}}>
            SignUp
        </h2>
            <input 
                    type="text"
                    required
                    placeholder="Name"
                    className="form-control  d-inline-flex p-2 " style={{width:"300px"}}
            />

            <input
                    type="text"
                    required
                    placeholder="Roll Number"
                    className="form-control d-inline-flex p-2" style={{width:"300px"}}
            />

            <input
                    type="text"
                    required
                    placeholder="Email-Id"
                    className="form-control d-inline-flex p-2" style={{width:"300px"}}
            />

            <input
                    type="tel"
                    required
                    placeholder="Mobile Number"
                    className="form-control d-inline-flex p-2" style={{width:"300px"}}
            />

                <select class="form-select d-inline-flex p-2" style={{width:"300px"}}>
                <option>Department</option>
                <option>CSE</option>
                <option>EEE</option>
                <option>ECE</option>
                <option>EIE</option>
                </select>

            <input
                    type="password"
                    required
                    placeholder="Password"
                    className="form-control d-inline-flex p-2" style={{width:"300px"}}
            />

            <input
                    type="password"
                    required
                    placeholder="Confirm Password"
                    className="form-control d-inline-flex p-2" style={{width:"300px"}}
            />
<br />
<br />
            <button className="btn mt-2" >
            SignUp
            </button>
                <br />
                <h5 className="m-2" style={{fontFamily: 'Inter',fontStyle: "normal" ,padding:"5px", fontWeight:"bold"}}> <br />
                    Already User? {" "}
                    <a href="/register" style={{ textDecoration: "none" ,color:"rgba(0, 0, 0, 0.4)"}}>
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
