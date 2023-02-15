import React from "react";
import "../DetailedView.css";

const BookDetailedView = ()=>{
    return(
        <div className="book-detailed-view">
            <div className="back-icon">
                <img src={"https://m.media-amazon.com/images/I/41Oc1U2riIL.jpg"} alt="Back Icon" class="img-fluid"/>
            </div>
            <div className="book-image">
                <img src={"https://m.media-amazon.com/images/I/41Oc1U2riIL.jpg"} alt="The Way of the Nameless" class="img-fluid"/>
            </div>
            <div className="book-details" style={{marginTop: "10rem",marginLeft: "1rem"}}>
                <div className = "details" class="border border-dark container" style={{backgroundColor: "rgba(244, 241, 241, 0.65)"}}>
                <form class="book-static-form">

                    <div class="form-group row">
                        <label for="bookTitle" class="col-sm-5 col-form-label">Book Title:</label>
                        <div class="col-sm-7">
                        <input type="text" readonly class="form-control-plaintext" id="bookTitle" value="The Power of Pivoting"/>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="authorName" class="col-sm-5 col-form-label">Author Name:</label>
                        <div class="col-sm-7">
                        <input type="text" readonly class="form-control-plaintext" id="authorName" value="The Power of Pivoting"/>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="category" class="col-sm-5 col-form-label">Category:</label>
                        <div class="col-sm-7">
                        <input type="text" readonly class="form-control-plaintext" id="category" value="The Power of Pivoting"/>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="availableCopy" class="col-sm-5 col-form-label">Available Copies:</label>
                        <div class="col-sm-7">
                        <input type="text" readonly class="form-control-plaintext" id="availableCopy" value="3 Copies"/>
                        </div>
                    </div>

                    <div class="form-group row ">
                        <label for="bPrice" class="col-sm-5 col-form-label">Price:</label>
                        <div class="col-sm-7">
                        <input type="text" readonly class="form-control-plaintext" id="bPrice" value="Rs. 150"/>
                        </div>
                    </div>

                    <div class="addButton" className="form-group row text-center">
                        <div class="col-md-12 text-center">
                        <button type="button" class="col-md-8 btn btn-success">Add to Your Library</button>
                        </div>
                    </div> 
                </form>
                
                </div>
            </div>
            </div>
    )
};

export default BookDetailedView;