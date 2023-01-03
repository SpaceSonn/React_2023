import React, { useState } from "react";
import Button from "react-bootstrap/Button";
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
            <AwesomeButton variant="outline-primary h-100" onClick={handleShow}>
              Шинэ
            </AwesomeButton>
          </div>
          <div>
            <div class="d-flex justify-content-between mt-5 mb-3 p-3 border rounded">
              <h5 class="my-auto">Улс төр</h5>
              <AwesomeButton type="secondary">Засах </AwesomeButton>
            </div>
            <div class="d-flex justify-content-between mb-3 p-3 border rounded">
              <h5 class="my-auto">Нийгэм</h5>
              <AwesomeButton type="secondary">Засах </AwesomeButton>
            </div>
            <div class="d-flex justify-content-between mb-3 p-3 border rounded">
              <h5 class="my-auto">Спорт</h5>
              <AwesomeButton type="secondary">Засах </AwesomeButton>
            </div>
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
          <Button variant="outline-danger" onClick={handleClose}>
            Устгах
          </Button>
          <Button variant="outline-success" onClick={handleClose}>
            Хадгалах
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Body;
