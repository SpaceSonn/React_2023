import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import "../App.css";
function Body() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="row mx-auto">
        <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2">
          <div className="d-flex justify-content-between mt-5">
            <h1>Ангилал</h1>
            <AwesomeButton onPress={handleShow}>Шинэ</AwesomeButton>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ангилал нэмэх</Modal.Title>
        </Modal.Header>
        <Form.Group className="mb-3 p-3" controlId="formBasicEmail">
          <Form.Label>Нэр</Form.Label>
          <Form.Control type="email" placeholder="Aнгиллын нэр" />
        </Form.Group>
        <Modal.Footer className="d-flex justify-content-between">
          <AwesomeButton type="danger" onPress={handleClose}>
            Устгах
          </AwesomeButton>
          <AwesomeButton type="secondary" onPress={handleClose}>
            Хадгалах
          </AwesomeButton>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Body;
