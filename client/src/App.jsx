import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    //Aca van botones navbar y todo lo que este en el home
    <main className="main_container">
      <NavBar />
      <Outlet />
      <Footer />
    </main>
  );
}

export default App;
