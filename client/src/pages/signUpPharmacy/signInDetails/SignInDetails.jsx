import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';

const SignInDetails = () => {
  const navigate = useNavigate();
  return (
    <div>
      SignInDetails
      <Button onClick={() => navigate('adminitration_allowed')}>
        Siguiente
      </Button>
    </div>
  );
};

export default SignInDetails;
