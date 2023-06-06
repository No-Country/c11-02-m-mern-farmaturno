import './farmaciasAdeheridas.css';
import cruzVerde from './assets/logotipoCruzVerde.png';
import substract from './assets/Subtract.png';
const FarmaciaAdicionales = () => {
  return (
    <div className="adheridasFarmacia">
      <h2>Farmacias y droguerias adheridas</h2>
      <div className="farmaciaBotom">
        <img src={cruzVerde} alt="Logotipo de farmacia cruz verde" />
        <button>
          <img src={substract} alt="icono de sumar farmacia" />
          Adherir mi farmacia
        </button>
      </div>
    </div>
  );
};

export default FarmaciaAdicionales;
