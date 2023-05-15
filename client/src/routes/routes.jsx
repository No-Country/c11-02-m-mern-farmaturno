import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import PageNuevoTurno from "../pages/PageNuevoTurno/PageNuevoTurno";
import PageTurno from "../pages/pageTurno/PageTurno";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{ path: "/nuevoTurno", element: <PageNuevoTurno /> },
			{ path: "/miTurno", element: <PageTurno /> },
		],
	},
]);
