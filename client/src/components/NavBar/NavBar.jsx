import { Navbar, Container, Nav, Offcanvas } from 'react-bootstrap';
import '../NavBar/navbar.css';
import { useNavigate } from 'react-router-dom';
const NavBar = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar expand="lg" className="navbar p-0">
        <Container fluid className="  my-1 ">
          <Navbar.Brand href="/" className="txTitle">
            <img
              src="https://i.ibb.co/wpSp6pg/logo1-1-Photo-Room-png-Photo-Room.png"
              alt="logo"
              className="logo   "
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Offcanvas
            className="offcanvas"
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="start"
          >
            <Offcanvas.Header closeButton>   
            <img
                src="https://i.ibb.co/wpSp6pg/logo1-1-Photo-Room-png-Photo-Room.png"
                alt="logo"
                className="mr-3  logoOffcanvas   "
              />
              </Offcanvas.Header>
            <Offcanvas.Body className='offcanvasBody'>
              <Nav className="me-auto"></Nav>
              <Nav className="txCategory justify-content-end flex-grow-1 pe-3">
                <Nav.Link>
                  <p className="txCategory  my-1 acercaFarmTx">Acerca de FarmaTurno</p>
                </Nav.Link>
                <Nav.Link>
                  <p
                    className="txCategory my-1 soyFarmaciaTx"
                    onClick={() => navigate('pharmacy')}
                  >Soy farmacia
                  </p>
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
