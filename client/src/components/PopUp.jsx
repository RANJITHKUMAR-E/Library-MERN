import React, { useState } from 'react';
import { Modal, Button } from "react-bootstrap";

function ModalDialog(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleOperation = () => {
    if (props.fire == "update") {
    }
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        {props.name}
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>Do you want to {props.name}?</Modal.Body>
        <Modal.Footer>
          <Button
            onClick={handleOperation}
            style={{
              backgroundColor: "rgba(22, 199, 7, 1)",
              color: "white",
              width: "80px",
            }}
          >
            Yes
          </Button>
          <Button
            onClick={handleClose}
            style={{
              backgroundColor: "rgba(237, 7, 7, 1)",
              color: "white",
              width: "80px",
            }}
          >
            No
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

ModalDialog.defaultProps ={
  name : "Add Student"
}

export default ModalDialog