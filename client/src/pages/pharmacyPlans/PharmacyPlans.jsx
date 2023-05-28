import { useNavigate } from 'react-router-dom';
import './pharmacyPlans.css';
const PharmacyPlans = () => {
  const navigate = useNavigate();

  return (
    <div className="pharmacyPlans">
      <button className="signUp_button" onClick={() => navigate('signUp')}>
        Registrate
      </button> 
      <div>
        <p>Hola</p>
      </div>
    </div>
  );
};

export default PharmacyPlans;
