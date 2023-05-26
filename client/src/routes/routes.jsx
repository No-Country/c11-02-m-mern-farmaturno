import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import PageNewAppointment from '../pages/PageNewAppointment/PageNewAppointment';
import PageTurno from '../pages/pageTurno/PageTurno';
import Home from '../pages/Home/Home';
import LoginForPharmacyOwner from '../components/PharmaceuticalLogin/LoginScreen';
import NoAppointmentPrueba from '../pages/noAppointment/NoAppointmentprueba';
import PharmacyPlans from '../pages/pharmacyPlans/PharmacyPlans';
import SignUpPharmacy from '../pages/signUpPharmacy/SignUpPharmacy';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'nuevoTurno', element: <PageNewAppointment /> },
      { path: 'miTurno', element: <PageTurno /> },
      {
        path: 'no_appointment',
        element: <NoAppointmentPrueba />,
      },
      {
        path: 'pharmacy',
        element: <PharmacyPlans />,
      },
      {
        path: 'pharmacy/adminitration_allowed',
        element: <LoginForPharmacyOwner />,
      },
      {
        path: 'pharmacy/signUp',
        element: <SignUpPharmacy />,
      },
    ],
  },
]);
