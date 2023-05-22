import { Navbar, Container, Nav, NavDropdown, Image } from 'react-bootstrap';
import '../NavBar/navbar.css';
import { useNavigate } from 'react-router-dom';
import imgLogo from '../../assets/img/logo.png';
const NavBar = () => {
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
          {/* </div> */}
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end ml-md-auto m-4 p-4"
          >
            <NavDropdown
              title="Acerca de FarmaTurno"
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
                <p
                  className="txCategory m-2"
                  onClick={() => navigate('/adminitration_allowed')}
                >
                  Soy farmacia
                </p>
              </Nav.Link>
              <Nav.Link href="">
                <p className="txCategory m-2">Ayuda</p>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
