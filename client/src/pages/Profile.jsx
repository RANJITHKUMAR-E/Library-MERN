import React from "react";
import PopUp from "../components/PopUp";

export default function Profile() {
  return (
    <>
    <div class="container-xl px-4 mt-4">

    <hr class="mt-0 mb-4"/>
    <div class="row">
        <div class="col-xl-4">
            <div class="card mb-4 mb-xl-0">
                <div class="card-header">Profile Picture</div>
                <div class="card-body text-center">
                    <img class="img-account-profile rounded-circle mb-2" src="http://bootdey.com/img/Content/avatar/avatar1.png" alt=""/>
                    <div class="small font-italic text-muted mb-4">JPG or PNG no larger than 5 MB</div>
                    <input type="file" class="form-control"/>
                </div>
            </div>
        </div>
        <div class="col-xl-8">
            <div class="card mb-4">
                <div class="card-header">Account Details</div>
                <div class="card-body">
                    <form>
                    <div class="row">
                            <div class="col-6">
                                <label class="small mb-1" for="inputFirstName">Name</label> </div>
                                <div class="col-6"> <input class="form-control d-inline-flex " id="inputFirstName" type="text" placeholder="Enter your name" value="Mukilan T" style={{marginTop:"-2px"}}/>
                            </div>
                        </div><br />
                        <div class="row">
                            <div class="col-6">
                                <label class="small mb-1" for="rollNumber">Roll number</label> </div>
                                <div class="col-6"> <input class="form-control d-inline-flex " id="rollNumber" type="text" placeholder="Enter your roll no." value="20CSR129" style={{marginTop:"-2px"}}/>
                            </div>
                        </div><br />
                        <div class="row">
                            <div class="col-6">
                                <label class="small mb-1" for="email">Email</label> </div>
                                <div class="col-6"> <input class="form-control d-inline-flex " id="email" type="text" placeholder="Enter your Email Id" value="mukilant.20cse@kongu.edu" style={{marginTop:"-2px"}}/>
                            </div>
                        </div><br />

                        <div class="row">
                            <div class="col-6">
                                <label class="small mb-1" for="Phone number">Phone number</label> </div>
                                <div class="col-6"> <input class="form-control d-inline-flex " id="phone" type="tel" placeholder="Enter your phone number" value="8300984420" style={{marginTop:"-2px"}}/>
                            </div>
                        </div><br />

                        <div class="row">
                            <div class="col-6">
                                <label class="small mb-1" for="Age">Age</label> </div>
                                <div class="col-6"> <input class="form-control d-inline-flex " id="phone" type="tel" placeholder="Enter your age" value="18" style={{marginTop:"-2px"}}/>
                            </div>
                        </div><br />

                        <div class="row">
                            <div class="col-6">
                                <label class="small mb-1" for="Department">Department</label> </div>
                                <div class="col-6"> <input class="form-control d-inline-flex " id="text" type="tel" placeholder="Enter your Department" value="CSE" style={{marginTop:"-2px"}}/>
                            </div>
                        </div><br />
                    <div className="row">
                        <div className="col-6">
                       <PopUp name="Update"></PopUp>
                        </div>
                        <div className="col-6">
                        <PopUp name="Logout"></PopUp>
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


