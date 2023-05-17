import React from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  Button,
} from "react-bootstrap";
import "../NavBar/navbar.css";

const NavBar = () => {
  return (
    <>
      <Navbar
        expand="md"
        // fixed="top"
        // className={colorNav ? "navbar navbar-bg" : "navbar"}
        // bg='danger'
        className="navbar mt-3 "
      >
        <Container>
          <Navbar.Brand href="/" className="txTitle ">
            <img
              src="..\src\assets\img\logo.png"
              alt="logo"
              height={87}
              className=""
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end m-4"
          >
            <NavDropdown
              title="A cerca de FarmaTurno"
              id="basic-nav-dropdown"
              className="txCategory1 mx-2"
            >
              <NavDropdown.Item href="#action/3.1" className="txSubcategory">
                <p className="txSubcategory m-2">Action</p>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className="txSubcategory">
                <p className="txSubcategory">Another action</p>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav className="me-auto"></Nav>
            <Nav className="txCategory">
              <Nav.Link href="#sobreMi">
                <p className="txCategory mx-2 ">Soy farmacia</p>
              </Nav.Link>
              <Nav.Link href="#tecnologias" >
                <p className="txCategory mx-2">Ayuda</p>
              </Nav.Link>
              {/* </div> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
