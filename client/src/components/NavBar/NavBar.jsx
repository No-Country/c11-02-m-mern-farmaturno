import { Navbar, Container, Nav, NavDropdown, Image } from 'react-bootstrap';
import '../NavBar/navbar.css';
import { useNavigate } from 'react-router-dom';
import imgLogo from '../../assets/img/logo.png';
const NavBar = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar expand="lg" className="navbar p-0">
        <Container fluid className=" p-4 my-1 ">
          <Navbar.Brand href="/" className="txTitle">
            <img
              src="https://i.ibb.co/p4pJLg6/logo1-1.png"
              alt="logo"
              height={50}
              className="mx-1 my-1 align-self-start   "
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end ml-md-auto bg-white"
          >
             <Nav.Link href="">
                <p className="txCategory mx-1 my-1">Acerca de FarmaTurno</p>
              </Nav.Link>
  
            <Nav className="me-auto"></Nav>
            <Nav className="txCategory mx-4 px-4">
              <Nav.Link href="">
                <p
                  className="txCategory my-1 mx-2"
                  onClick={() => navigate('/adminitration_allowed')}
                >
                  Soy farmacia
                </p>
              </Nav.Link>
              <Nav.Link href="">
                <p className="txCategory my-1 mx-2">Ayuda</p>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
