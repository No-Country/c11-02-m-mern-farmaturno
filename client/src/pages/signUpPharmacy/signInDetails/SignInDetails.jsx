import { Button, Form } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import './signInDetails.css';

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
    <div className="signIn-details">
      <h2>Datos de inicio de sesión</h2>
      <p>
        Por último, completa los campos con la información correspondiente.
        Recuerda que estos son los datos que usarás para iniciar sesión.
      </p>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="custom-row">
          <Form.Label className="label">Correo electrónico</Form.Label>
          <Form.Control required type="text" />
        </Row>
        <Row className="custom-row">
          <Form.Label className="label">Usuario</Form.Label>
          <Form.Control required type="text" />
        </Row>
        <Row className="custom-row">
          <Form.Label className="label">Contraseña</Form.Label>
          <Form.Control required type="number" />
        </Row>
        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check
            type="checkbox"
            label="Acepto los terminos y condiciones y autorizo el uso de mis datos de acuerdo a la Declaracion de privacidad"
            required
            name="isCheckboxChecked"
            checked={true}
            className="checkbox"
            /* onChange={} */
            // isinvalid={errors.isCheckboxChecked !== ''}
          />
          <Form.Control.Feedback type="invalid" className="custom-feedback">
            {}
          </Form.Control.Feedback>
        </Form.Group>
        <Button variant={`secondary`} type="submit" onClick={handleClick}>
          Regístrate
        </Button>
      </Form>
    </div>
  );
};

export default SignInDetails;
