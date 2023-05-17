import Footer from './Footer/Footer';
import PanelIngreso from './panelIngreso/PanelIngreso';
import './home.css';
const Home = () => {
  return (
    <div className="home">
      <div className="mensajeBienvenida">
        <p>Te damos la bienvenida a</p>
        <p> Farmaturno</p>
        <p> ¡Gracias por elegirnos!</p>
      </div>
      <PanelIngreso />
      {/* 	<Footer /> */}
    </div>
  );
};

export default Home;
