import React from 'react';
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Offcanvas,
} from 'react-bootstrap';
import '../navbarFarmacia/navbarFarmacia.css';
import { useNavigate } from 'react-router-dom';

const NavbarFarmaceutico = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar expand="lg" className="navbar p-0">
        <Container fluid className=" mx-4 ">
          {/* <div className="d-flex align-items-center justify-content-between"> */}
          <Navbar.Brand href="/" className="txTitle">
            <img
              src="https://i.ibb.co/Z8NKxKV/logo-removebg-preview.png"
              alt="logo"
              height={50}
              className="mr-3 align-self-start   "
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="" />
          <Navbar.Offcanvas 
            className="offcanvas"
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="start"
          >
            <Offcanvas.Header closeButton>

            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="me-auto"></Nav>
              <Nav className="txCategory">
                <Nav.Link href="">
                  <p
                    className="txCategory m-2"
                  >
                    Acerca de FarmaTurno
                  </p>
                </Nav.Link>
                <NavDropdown
              title="Soy Farmacia"
              id="basic-nav-dropdown"
              className="txCategory1 m-2"
            >
              <NavDropdown.Item href="#action/3.1" className="txSubcategory">
                <p className="txSubcategory m-2">Nuevos Turnos</p>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className="txSubcategory">
                <p className="txSubcategory m-2">Turnos reservados</p>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className="txSubcategory">
                <p className="txSubcategory m-2">Reserva de turno manual</p>
              </NavDropdown.Item>
            </NavDropdown>
                <Nav.Link href="">
                  <p className="txCategory m-2">Ayuda</p>
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarFarmaceutico;
