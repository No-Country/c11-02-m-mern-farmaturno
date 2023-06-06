import './firstDescription.css';
import timeImage from './assets/time.png';
import { Button } from 'react-bootstrap';
const FirstDescription = () => {
  return (
    <div className="firstDescription">
      <img src={timeImage} alt="imagen descriptiva" />
      <h2>Un turnero online, para que vayas a la farmacia cuando tu quieras</h2>
      <p>
        Pide tu turno de forma fácil y rápida, y evita las largas filas de
        espera.
      </p>
      <Button variant="outline-success">Quiero un turno</Button>
    </div>
  );
};

export default FirstDescription;
