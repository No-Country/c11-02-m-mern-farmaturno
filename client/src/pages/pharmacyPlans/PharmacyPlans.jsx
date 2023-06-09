import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './pharmacyPlans.css';
import NavBar from '../../components/NavBar/NavBar';
import pana from './assets/pana.png';
import '../../../public/photo.svg'
import Footer from '../../components/Footer/Footer';
const PharmacyPlans = () => {
  const navigate = useNavigate();

  return (
    <>
      <NavBar />
      <div className="pharmacyPlans">
        <div className="pharmacyPlans-topSection">
          <div className="pharmacyBiografi">
            <img className="graphics" src={pana} alt="Imagen descriptiva" />
            <div className="right-section">
              <h2>Accede a la manera más sencilla de gestionar tus turnos</h2>
              <p>
                Mayor organización, eficiencia y satisfaccíon tanto para los
                clientes como para el personal.
              </p>
              <span>¿Quieres comenzar a utilizarlo ya?</span>
              <Button
                className="signUp_button"
                onClick={() => navigate('signUp')}
              >
                Regístrate
              </Button>
            </div>
          </div>
          <div className="pharmacy">
            <h3>Mas fácil que nunca</h3>
            <img className='imgLinea3' src="https://i.ibb.co/4tdr82f/Captura-de-pantalla-2023-06-08-232524.png" alt="" />
          </div>

          <div className="gallery">
            <div className="columns">
              <div className="item">
                <i className="bi bi-check-all"></i>
                <p>Turnos en simultáneo</p>
              </div>
              <div className="item">
                <i className="bi bi-check-all"></i>
                <p>Alerta por email</p>
              </div>
              <div className="item">
                <i className="bi bi-check-all"></i>
                <p>Trazabilidad de turnos</p>
              </div>
              <div className="item">
                <i className="bi bi-check-all"></i>
                <p>Diseño de web responsivo</p>
              </div>
              <div className="item">
                <i className="bi bi-check-all"></i>
                <p>Servicio gratuito</p>
              </div>
            </div>
            <div className="columns1">
              <div className="image-container">
                <img  className='imageCel3' src="https://i.ibb.co/6XqFqCT/rafiki.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default PharmacyPlans;
