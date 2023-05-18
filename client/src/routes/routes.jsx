import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import PageNuevoTurno from '../pages/PageNuevoTurno/PageNuevoTurno';
import PageTurno from '../pages/pageTurno/PageTurno';
import Home from '../pages/Home/Home';
import LoginForPharmacyOwner from '../components/PharmaceuticalLogin/LoginScreen';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'nuevoTurno', element: <PageNuevoTurno /> },
      { path: 'miTurno', element: <PageTurno /> },
      {
        path: 'adminitration_allowed',
        element: <LoginForPharmacyOwner />,
      },
    ],
  },
]);
