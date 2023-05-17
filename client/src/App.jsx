import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';

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
