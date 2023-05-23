import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import PageNewAppointment from '../pages/PageNewAppointment/PageNewAppointment';
import PageTurno from '../pages/pageTurno/PageTurno';
import Home from '../pages/Home/Home';
import LoginForPharmacyOwner from '../components/PharmaceuticalLogin/LoginScreen';
import NoAppointmentPrueba from '../pages/noAppointment/NoAppointmentprueba';
import { Confirmation } from "../pages/Confirmation/Confirmation";


export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'nuevoTurno', element: <PageNewAppointment /> },
      { path: 'miTurno', element: <PageTurno /> },
      {
        path: 'adminitration_allowed',
        element: <LoginForPharmacyOwner />,
      },

    {path:'no_appointment', element:<NoAppointmentPrueba/>},
	  {
		path:'confirmacion_turno',
		element: <Confirmation/>
	  }
			
		],
	},

]);
