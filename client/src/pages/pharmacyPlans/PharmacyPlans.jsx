import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './pharmacyPlans.css';
const PharmacyPlans = () => {
  const navigate = useNavigate();

  return (
    <div className="pharmacyPlans">
      <div className='pharmacyBiografi'>
        <h2>Accede a la manera más sencilla de gestionar tus turnos</h2>
        <p>Mayor organización, eficiencia y satisfaccíon tanto para los clientes como para el personal.</p>
        <span>¿Quieres comenzar a utilizarlo ya?</span>
        
        <div className='pharmacy'>
        <Button variant="success" className="signUp_button"  onClick={() => navigate('signUp')}>
          Registrate
        </Button>
        <h3>Mas fácil que nunca</h3>
          <img src="/public/phon.svg" alt="" />
        </div>

        <div className="gallery">
      <div className="columns">
        <div className="item">
          <i className="bi bi-check-all"></i>
          <p>Turnos en simultáneo</p>
        </div>
        <div className="item">
          <i className="bi bi-check-all"></i>
          <p>Alerta por mensaje</p>
        </div>
        <div className="item">
          <i className="bi bi-check-all"></i>
          <p>Tranzabilidad por turnos</p>
        </div>
        <div className="item">
          <i className="bi bi-check-all"></i>
          <p>Diseño de web responsivo</p>
        </div>
      </div>
      <div className="columnas">
        <div className="image-container">
          <img src="/public/photo.svg" alt="" />
        </div>
      </div>
    </div>
      </div>
    </div>
  );
};

export default PharmacyPlans;
