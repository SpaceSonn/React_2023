import React from "react";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavScrollExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Админ</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Хэрэглэгч</Nav.Link>
            <Nav.Link href="#action2">Ангилал</Nav.Link>
            <NavDropdown title="Мэдээ" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Мэдээ</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Сэтгэгдэл</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Шинэ мэдээ</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Сэдэв
            </Nav.Link>
          </Nav>
          <AwesomeButton type="danger">Гарах</AwesomeButton>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
