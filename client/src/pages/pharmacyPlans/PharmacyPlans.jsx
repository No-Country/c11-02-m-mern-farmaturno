import { useNavigate } from 'react-router-dom';
import './pharmacyPlans.css';
const PharmacyPlans = () => {
  const navigate = useNavigate();

  return (
    <div className="pharmacyPlans">
      <div className='pharmacyBiografi'>
        <h2>Accede a la manera más sencilla de gestionar tus turnos</h2>
        <p>Mayor organización, eficcia y satisfaccíon tanto para los clientes como para el personal</p>
        <p>¿Quieres comenzar a utilizarlo ya?</p>
        <button className="signUp_button" onClick={() => navigate('signUp')}>
          Registrate
        </button>
        <p>Mas fácil que nunca</p>

        <div>
          <img src="/public/phon.svg" alt="" />
        </div>

        <div className="gallery">
      <div className="column">
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
      <div className="column">
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
