import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Offcanvas,
  Dropdown,
} from 'react-bootstrap';
import '../navbarFarmacia/navbarFarmacia.css';
import { useNavigate } from 'react-router-dom';
import '../../NavBar/navbar.css'

const NavbarFarmaceutico = () => {
  const navigate = useNavigate();

  const cerrarSesion = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('companyName');
    navigate(`/pharmacy/signUp/adminitration_allowed`);
  };

  return (
    <>
      <Navbar expand="lg" className="navbar p-0">
        <Container fluid className=" mx-4 ">
          <Navbar.Brand href="/" className="txTitle">
            <img
              src="https://i.ibb.co/Z8NKxKV/logo-removebg-preview.png"
              alt="logo"
              className="mr-3 align-self-start   "
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Offcanvas
            className="offcanvas"
            id={`offcanvasNavbar-expand-xs`}
            aria-labelledby={`offcanvasNavbarLabel-expand-xs`}
            placement="start"
          >
            <Offcanvas.Header closeButton className='offcanvasHeader'>   
            <img
                src="https://i.ibb.co/wpSp6pg/logo1-1-Photo-Room-png-Photo-Room.png"
                alt="logo"
                className="mr-3  logoOffcanvas   "
              />
              </Offcanvas.Header>
            <Offcanvas.Body className='offcanvasBody'>
              <Nav className="me-auto"></Nav>
              <Nav className="txCategory">
                {/* <Nav.Link>
                  <p className="txCategory  my-1 acercaFarmTx">Acerca de FarmaTurno</p>
                </Nav.Link> */}
                <Nav.Link>
                  <p
                    className="txCategory my-1 soyFarmaciaTx"
                    onClick={() => navigate('/pharmacy/profile')}
                  >Turnos reservados</p>
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <Dropdown align={'end'} className="mx-4" variant="white">
            <Dropdown.Toggle
              variant="white"
              id="dropdown-basic"
              className="dropdownImg"
            >
              <img
                className="imgPerfil"
                src="https://i.ibb.co/d49Hfgt/person-circle.png"
                height={24}
              />
            </Dropdown.Toggle>

            <Dropdown.Menu className=" dropdownPerfil">
              <Dropdown.Item
                className=" dropItem"
                onClick={(e) => navigate('/pharmacy/profile/data')}
              >
                Mi perfil
              </Dropdown.Item>
              <Dropdown.Item
                className="dropItem"
                onClick={(e) => cerrarSesion()}
              >
                Cerrar sesion
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarFarmaceutico;
