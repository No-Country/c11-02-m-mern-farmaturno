import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import PageNewAppointment from "../pages/PageNewAppointment/PageNewAppointment";
import PageTurno from "../pages/pageTurno/PageTurno";
import Home from "../pages/Home/Home";


export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{ path: "/", element: <Home /> },
			{ path: "nuevoTurno", element: <PageNewAppointment /> },
			{ path: "miTurno", element: <PageTurno /> },
			
		],
	},
]);
