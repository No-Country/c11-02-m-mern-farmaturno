import './instructions.css';
import mobileInstructions from './assets/pasopasomobile.png';
import tabletInstructions from './assets/pasoapasotablet.png';
const Instructions = () => {
  return (
    <div className="instructions">
      <img className="mobile" src={mobileInstructions} alt="instrucciones" />
      <img className="tablet" src={tabletInstructions} alt="instrucciones" />
    </div>
  );
};

export default Instructions;
