import React from "react";


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
          
                    <button class="btn btn-primary" type="button">Upload new image</button>
                    <input type="file" class="form-control"/>
                </div>
            </div>
        </div>
        <div class="col-xl-8">
            <div class="card mb-4">
                <div class="card-header">Account Details</div>
                <div class="card-body">
                    <form>
                        <div class="mb-3">
                            <label class="small mb-1" for="inputUsername">Username</label>
                            <input class="form-control" id="inputUsername" type="text" placeholder="Enter your username" value="Mukilan"/>
                        </div>
                        <div class="row gx-3 mb-3">
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputFirstName">Roll number</label>
                                <input class="form-control" id="inputFirstName" type="text" placeholder="Enter your first name" value="20CSR129"/>
                            </div>
                           
                        </div>
                        <div class="row gx-3 mb-3">
                            <div class="col-md-6">
                                
                            <label class="small mb-1" for="inputEmailAddress">Email address</label>
                            <input class="form-control" id="inputEmailAddress" type="email" placeholder="Enter your email address" value="mukilant87@gmail.com"/>
                            </div>
                           
                        </div>
                        <div class="row gx-3 mb-3">
                        <div class="col-md-6">
                            <label class="small mb-1" for="inputEmailAddress">Age</label>
                            <input class="form-control" id="inputEmailAddress" type="email" placeholder="Enter your age" value="18"/>
                        </div>
                        </div>
                        <div class="row gx-3 mb-3">
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputPhone">Phone number</label>
                                <input class="form-control" id="inputPhone" type="tel" placeholder="Enter your phone number" value="555-123-4567"/>
                            </div></div>
                            <div class="row gx-3 mb-3">
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputDept">Department</label>
                                <input class="form-control" id="inputDept" type="text" name="department" placeholder="Enter yourdepartment" value="CSE"/>
                                </div>
                        </div>
                        <button class="btn btn-primary" type="button">Save changes</button>
                        <button class="btn btn-primary" type="button">LogOut</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
    </>
  );
}
