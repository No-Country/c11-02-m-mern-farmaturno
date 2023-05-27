import { Button } from 'react-bootstrap';
import { useContext } from 'react';
import { SignUpContext } from '../context/pharmacyContext';
const PharmacyDetails = () => {
  const { setFormToShow } = useContext(SignUpContext);

  const handleClick = () => {
    setFormToShow('c');
  };
  return (
    <div>
      PharmacyDEtails
      <Button onClick={handleClick}>Siguiente</Button>
    </div>
  );
};

export default PharmacyDetails;
