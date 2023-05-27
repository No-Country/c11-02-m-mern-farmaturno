import { Button, Form } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router';
import { useState } from 'react';

const SignInDetails = () => {
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);

  const handleClick = () => {
    navigate('adminitration_allowed');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control required type="text" />
        </Row>
        <Row className="mb-3">
          <Form.Label>Usuario</Form.Label>
          <Form.Control required type="text" />
        </Row>
        <Row className="mb-3">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control required type="number" />
        </Row>
        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check
            type="checkbox"
            label="Acepto los terminos y condiciones y autorizo el uso de mis datos de acuerdo a la Declaracion de privacidad"
            required
            name="isCheckboxChecked"
            checked={true}
            /* onChange={} */
            // isinvalid={errors.isCheckboxChecked !== ''}
          />
          <Form.Control.Feedback type="invalid" className="custom-feedback">
            {}
          </Form.Control.Feedback>
        </Form.Group>
        <Button type="submit" onClick={handleClick}>
          Siguiente
        </Button>
      </Form>
    </div>
  );
};

export default SignInDetails;
