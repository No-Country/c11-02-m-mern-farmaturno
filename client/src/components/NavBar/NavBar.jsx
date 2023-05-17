import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import '../NavBar/navbar.css';
import { useNavigate } from 'react-router-dom';
const NavBar = () => {
  const navigate=useNavigate()
  return (
    <>
      <Navbar expand="md" className="navbar">
        <Container>
          <Navbar.Brand href="/" className="txTitle ">
            <img
              src="..\src\assets\img\logo.png"
              alt="logo"
              height={87}
              className="mx-2"
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
                <p className="txSubcategory m-2">Cliente</p>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className="txSubcategory">
                <p className="txSubcategory m-2">Farmacia</p>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav className="me-auto"></Nav>
            <Nav className="txCategory">
              <Nav.Link href="">
                <p className="txCategory m-2 " onClick={()=>navigate('/adminitration_allowed')}>Soy farmacia</p>
              </Nav.Link>
              <Nav.Link href="">
                <p className="txCategory m-2">Ayuda</p>
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
