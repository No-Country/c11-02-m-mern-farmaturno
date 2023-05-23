import PanelIngreso from './panelIngreso/PanelIngreso';
import './home.css';
import FirstDescription from './firstDescription/FirstDescription';
import Divider from './divider/Divider';
import About from './about/About';
import Instructions from './instructions/Instructions';
import Footer from '../../components/Footer/Footer';
const Home = () => {
  return (
    <div className="home">
      <div className="welcomeSection">
        <div className="mensajeBienvenida">
          <p>Te damos la bienvenida a</p>
          <p> Farmaturno</p>
          <p> ¡Gracias por elegirnos!</p>
        </div>
        <PanelIngreso />
      </div>
      <FirstDescription />
      <Divider />
      <About />
      <Instructions />
      <Footer className="footer" />
    </div>
  );
};

export default Home;
