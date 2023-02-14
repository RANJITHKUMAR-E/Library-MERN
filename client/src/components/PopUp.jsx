import React, { useState } from 'react';
import { Modal, Button } from "react-bootstrap";
function ModalDialog() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Student
      </Button>
      <Modal show={show} onHide={handleClose} 
      aria-labelledby="contained-modal-title-vcenter"
      centered >

        <Modal.Body closeButton>Do you want to add new student?</Modal.Body>
        <Modal.Footer>
          <Button  onClick={handleClose} style={{backgroundColor:"rgba(22, 199, 7, 1)", color:"white", width:"80px"}} >
            Yes
          </Button>
          <Button  onClick={handleClose} style={{backgroundColor:"rgba(237, 7, 7, 1)", color:"white", width:"80px"}}>
            No
          </Button>   
        </Modal.Footer>
      </Modal>
    </>
  )
}
export default ModalDialog