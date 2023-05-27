import { Button } from 'react-bootstrap';
import { useContext } from 'react';
import { SignUpContext } from '../context/pharmacyContext';

const PharmacyOwnerDetails = () => {
  const { setFormToShow } = useContext(SignUpContext);

  const handleClick = () => {
    setFormToShow('b');
  };
  return (
    <div>
      Owner
      <Button onClick={handleClick}>Siguiente</Button>
    </div>
  );
};

export default PharmacyOwnerDetails;
