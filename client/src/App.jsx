import "./App.css";

import { Outlet } from "react-router-dom";

function App() {
	return (
		//Aca van botones navbar y todo lo que este en el home
		<>
			<h1>Holiss</h1>
			<Outlet />
		</>
	);
}

export default App;
