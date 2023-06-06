import './instructions.css';
import mobileInstructions from './assets/pasopasomobile.png';
const Instructions = () => {
  return (
    <div className="instructions">
      <img src={mobileInstructions} alt="instrucciones" />
    </div>
  );
};

export default Instructions;
