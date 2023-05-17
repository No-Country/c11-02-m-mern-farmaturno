import './navbar.css';
const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src="/Farmaturno.jpg" alt="" />
      </div>
      <div className="navbar-section">
        <a className="navbar-link" href="#">
          A cerca de FarmaTurno
          <span className="navbar-icon"></span>
          <i className="bi bi-chevron-down"></i>
        </a>
      </div>
      <div className="nav-support">
        <h3>Soy Farmacia</h3>
        <a href="#">Ayuda</a>
      </div>
    </nav>
  );
};

export default NavBar;
