import { ProgressBar } from 'react-bootstrap';
import PharmacyOwnerDetails from './pharmacyOwnerDetails/PharmacyOwnerDetails';
import PharmacyDetails from './pharmacyDetails/PharmacyDetails';
import SignInDetails from './signInDetails/SignInDetails';
import './signUpPharmacy.css';
import { useContext } from 'react';
import { SignUpContext } from './context/pharmacyContext';
import { useEffect } from 'react';
import { useState } from 'react';

const SignUpPharmacy = () => {
  const { formToShow } = useContext(SignUpContext);
  const [now, setNow] = useState(0);

  console.log(now);
  useEffect(() => {
    if (formToShow === 'b') {
      setNow(40);
    } else if (formToShow === 'c') {
      setNow(80);
    }
  }, [formToShow]);

  return (
    <div className="signUpPharmacy">
      {formToShow === 'a' && <PharmacyOwnerDetails />}
      {formToShow === 'b' && <PharmacyDetails />}
      {formToShow === 'c' && <SignInDetails />}

      <ProgressBar now={now} variant="success" />
    </div>
  );
};

export default SignUpPharmacy;
