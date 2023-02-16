import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap'

import "../DetailedView.css";
function ModalDialog(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        {props.name}
      </Button>
      <Modal show={show} onHide={handleClose} 
      aria-labelledby="contained-modal-title-vcenter"
      centered >

        <Modal.Body > <div className="book-detailed-view">
        
            <div className="book-details" style={{marginTop: "5rem",marginLeft: "1rem"}}>
            <div class="form-group row w-100 justify-content-center">
                        <label for="bookTitle" class="col-sm-5 col-form-label">Book Details</label>    
                    </div>
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

                    
                </form>
                
                </div>
            </div>
            </div></Modal.Body>
        <Modal.Footer>
          <Button  onClick={handleClose} style={{backgroundColor:"rgba(22, 199, 7, 1)", color:"white", width:"80px"}} >
            Add 
          </Button>
          <Button  onClick={handleClose} style={{backgroundColor:"rgba(237, 7, 7, 1)", color:"white", width:"80px"}}>
            Close
          </Button>   
        </Modal.Footer>
      </Modal>
    </>
  )
}

ModalDialog.defaultProps ={
  name : "Add Student"
}

export default ModalDialog