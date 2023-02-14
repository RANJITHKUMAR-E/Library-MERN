import React from "react";
import PopUp from '../components/PopUp';

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
                <div class="card-header">Add Student Details</div>
                <div class="card-body">
                    <form>
                    <div class="row">
                            <div class="col-6">
                                <label class="small mb-1" for="inputFirstName">Name</label> </div>
                                <div class="col-6"> <input class="form-control d-inline-flex " id="inputFirstName" type="text" placeholder="Enter your name"  style={{marginTop:"-2px"}}/>
                            </div>
                        </div><br />
                        <div class="row">
                            <div class="col-6">
                                <label class="small mb-1" for="rollNumber">Roll number</label> </div>
                                <div class="col-6"> <input class="form-control d-inline-flex " id="rollNumber" type="text" placeholder="Enter your roll no."  style={{marginTop:"-2px"}}/>
                            </div>
                        </div><br />
                        <div class="row">
                            <div class="col-6">
                                <label class="small mb-1" for="email">Email</label> </div>
                                <div class="col-6"> <input class="form-control d-inline-flex " id="email" type="text" placeholder="Enter your Email Id"  style={{marginTop:"-2px"}}/>
                            </div>
                        </div><br />

                        <div class="row">
                            <div class="col-6">
                                <label class="small mb-1" for="Phone number">Phone number</label> </div>
                                <div class="col-6"> <input class="form-control d-inline-flex " id="phone" type="tel" placeholder="Enter your phone number"  style={{marginTop:"-2px"}}/>
                            </div>
                        </div><br />

                        <div class="row">
                            <div class="col-6">
                                <label class="small mb-1" for="Age">Age</label> </div>
                                <div class="col-6"> <input class="form-control d-inline-flex " id="phone" type="tel" placeholder="Enter your age"  style={{marginTop:"-2px"}}/>
                            </div>
                        </div><br />

                        <div class="row">
                            <div class="col-6">
                                <label class="small mb-1" for="Department">Department</label> </div>
                                <div class="col-6"> <input class="form-control d-inline-flex " id="text" type="tel" placeholder="Enter your Department"  style={{marginTop:"-2px"}}/>
                            </div>
                        </div><br />
                    <div className="row w-100 justify-content-center" >
                        <PopUp  ></PopUp>
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
