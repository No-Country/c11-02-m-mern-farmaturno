import React from 'react'
import { Navbar, Container, Nav,NavDropdown  } from 'react-bootstrap';
import "../NavBar/navbar.css"

const NavBar = () => {
  return (
    <>

<Navbar
      expand="md"
      fixed="top"
      // className={colorNav ? "navbar navbar-bg" : "navbar"}
      // bg='danger'
      className='navbar'
    >
      <Container>
        <Navbar.Brand href="/" className="txTitle">
    <img src="..\src\assets\img\logo.png" alt="logo" height={70} />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="me-auto"></Nav>
          <Nav className="">
          <NavDropdown title="A cerca de FarmaTurno" id="basic-nav-dropdown"className='txCategory'>
              <NavDropdown.Item href="#action/3.1" className='txSubcategory'>Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"txSubcategory>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>

            <Nav.Link href="#sobreMi" className='txCategory'>Soy farmacia</Nav.Link>
            <Nav.Link href="#tecnologias" className='txCategory'>Ayuda</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
	</>
  )
}

export default NavBar;
