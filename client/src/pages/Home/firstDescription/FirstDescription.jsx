import './firstDescription.css';
import timeImage from './assets/time.png';
/* import { Button } from 'react-bootstrap'; */
const FirstDescription = () => {
  return (
    <div className="firstDescription">
      <div className="img-description_container">
        <img src={timeImage} alt="imagen descriptiva" />
      </div>
      <div className="tittle-paragraph">
        <h2>
          Un turnero online, para que vayas a la farmacia cuando tu quieras
        </h2>
        <p>
          Pide tu turno de forma fácil y rápida, y evita las largas filas de
          espera.
        </p>
      </div>
      {/* <Button variant="outline-success">Quiero un turno</Button> */}
    </div>
  );
};

export default FirstDescription;
