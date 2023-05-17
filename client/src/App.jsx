import "./App.css";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
	return (
		//Aca van botones navbar y todo lo que este en el home
		<main>
			<NavBar />
			<Outlet />
		</main>
	);
}

export default App;
