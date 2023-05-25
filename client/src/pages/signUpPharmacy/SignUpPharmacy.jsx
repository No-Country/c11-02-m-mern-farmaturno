import { Button } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './signUpPharmacy.css';

const SignUpPharmacy = () => {
  return (
    <div className="signUpPharmacy">
      <section className="details">
        Aca se renderizaria la seccion que corresponda
      </section>
      <Button variant="secondary">Siguiente</Button>
      <ProgressBar variant="success" now={30} />
    </div>
  );
};

export default SignUpPharmacy;
