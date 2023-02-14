
import PopUp from '../../components/PopUp';
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function AddBook() {
      const[bookName,setbookName]=useState("");  
      const[category,setCategory]=useState("");
      const[author,setAuthor]=useState("");
      const[publishDate,setPublishDate]=useState("");
      const[noOfBooks,setnoOfBooks]=useState("");
      const[price,setPrice]=useState("");

      const submitHandler = async () => {
        if (
          !bookName ||
          !category ||
          !author ||
          !publishDate ||
          !noOfBooks

        ) {
          window.alert("Fill all the required fields before submit ❗");
        } else {
          const userData = {
            bookName,
            category,
            author,
            publishDate,
            noOfBooks,
            price,
          };
          window.alert("Form submitted successfully ✔");
          try {
            const response = await axios.post("", userData);
            console.log(response);
          } catch (error) {
            console.log(error);
          }
        }
      };


  return (
    <>
    <div class="container-xl px-4 mt-4">

    <hr class="mt-0 mb-4"/>
    <div class="row">
        <div class="col-xl-4">
            <div class="card mb-4 mb-xl-0">
                <div class="card-header">Book Picture</div>
                <div class="card-body text-center">
                    <img class="img-account-profile mb-2 w-50" src="https://m.media-amazon.com/images/I/41Oc1U2riIL.jpg" alt=""/>
                    <div class="small font-italic text-muted mb-4">JPG or PNG no larger than 5 MB</div>
                    <input type="file" id="book" class="form-control"/>
                </div>
            </div>
        </div>
        <div class="col-xl-8">
            <div class="card mb-4">
                <div class="card-header">Add Book Details</div>
                <div class="card-body">
                    <form>
                    <div class="row">
                            <div class="col-6">
                                <label class="small mb-1" for="bookName">Book Name</label> </div>
                                <div class="col-6"> <input class="form-control d-inline-flex" 
                                                            id="bookName" type="text" 
                                                            placeholder="Enter the book name"  
                                                            style={{marginTop:"-2px"}}

                                                            value={bookName}
                                                            onChange={(e) => {
                                                            setbookName(e.target.value);
                                                            }}
                                                        />
                            </div>
                        </div><br />
                        <div class="row">
                            <div class="col-6">
                                <label class="small mb-1" for="category">Category</label> </div>
                                <div class="col-6"> <input class="form-control d-inline-flex " 
                                                            id="category" type="text" 
                                                            placeholder="Enter the book category"  
                                                            style={{marginTop:"-2px"}}
                                                            
                                                            value={category}
                                                            onChange={(e) => {
                                                            setCategory(e.target.value);
                                                            }}
                                                            />
                            </div>
                        </div><br />
                        <div class="row">
                            <div class="col-6">
                                <label class="small mb-1" for="authorName">Author</label> </div>
                                <div class="col-6"> <input class="form-control d-inline-flex " 
                                                        id="authorName" type="text" 
                                                        placeholder="Enter the Author"  
                                                        style={{marginTop:"-2px"}}
                                                        
                                                        value={author}
                                                            onChange={(e) => {
                                                            setAuthor(e.target.value);
                                                            }}
                                                        />
                            </div>
                        </div><br />

                        <div class="row">
                            <div class="col-6">
                                <label class="small mb-1" for="publishedDate">Published Date</label> </div>
                                <div class="col-6"> < input class="form-control d-inline-flex " 
                                                        id="date" type="date" 
                                                        placeholder="Enter the book published date"  
                                                        style={{marginTop:"-2px"}}
                                                        
                                                        value={publishDate}
                                                            onChange={(e) => {
                                                            setPublishDate(e.target.value);
                                                            }}
                                                        />
                            </div>
                        </div><br />

                        <div class="row">
                            <div class="col-6">
                                <label class="small mb-1" for="NumberOfBooks">Number of Books</label> </div>
                                <div class="col-6"> <input class="form-control d-inline-flex " 
                                                    id="NumberOfBooks" type="number" 
                                                    placeholder="Enter the number of books"  
                                                    style={{marginTop:"-2px"}}
                                                    
                                                    value={noOfBooks}
                                                            onChange={(e) => {
                                                            setnoOfBooks(e.target.value);
                                                            }}
                                                    />
                            </div>
                        </div><br />

                        <div class="row">
                            <div class="col-6">
                                <label class="small mb-1" for="Price">Price</label> </div>
                                <div class="col-6"> <input class="form-control d-inline-flex " 
                                                    id="Price" type="number" 
                                                    placeholder="Enter the Price"  
                                                    style={{marginTop:"-2px"}}
                                                    
                                                    value={price}
                                                    onChange={(e) => {
                                                    setPrice(e.target.value);
                                                    }}
                                                    />
                            </div>
                        </div><br />
                    <div className="row w-100 justify-content-center" >
                        <PopUp  name="Add Book" onClick={submitHandler}></PopUp>
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
