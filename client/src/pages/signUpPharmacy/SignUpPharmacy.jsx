import { Button } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './signUpPharmacy.css';
import { useState } from 'react';
import FistFormToComplete from './firstDataForm/firstForm';
const SignUpPharmacy = () => {
  const [seeFormRequired,setSeeFormRequired] = useState('')
  return (
    <div className="signUpPharmacy">
      <section className="details">
        <p>titulo mas boton</p>
        {
          seeFormRequired === '' ? <FistFormToComplete changeMenu={()=>setSeeFormRequired('a')}/> : <p>chau</p>
        }
      </section>
      <ProgressBar variant="success" now={30} />
    </div>
  );
};

export default SignUpPharmacy;
