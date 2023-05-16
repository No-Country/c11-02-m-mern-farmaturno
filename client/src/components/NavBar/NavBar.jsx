import './navbar.css';
const NavBar = () => {
	return <nav class="navbar">
	<div class="navbar-brand">
	  <img src="/Farmaturno.jpg" alt="" />
	</div>
	<div class="navbar-section">
	  <a class="navbar-link" href="#">
		A cerca de FarmaTurno
		<span class="navbar-icon"></span>
		<i class="bi bi-chevron-down"></i>
		</a>
	</div>
	<div class="nav-support">
	  <h3>Soy Farmacia</h3>
	  <a href="#">Ayuda</a>
	
	</div>
  </nav>
};

export default NavBar;
