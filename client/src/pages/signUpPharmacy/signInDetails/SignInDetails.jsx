import { Button, Form } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router';
import { useContext, useState } from 'react';
import './signInDetails.css';
import { addRegistrationDetails } from '../../../redux/authSlice';
import { useDispatch } from 'react-redux';

const SignInDetails = () => {
  const navigate = useNavigate();
  const { setFormToShow } = useContext(SignUpContext);
  const [registrationData, setRegistrationData] = useState({
    registrationEmail: '',
    registrationUsername: '',
    registrationPassword: '',
    errors: {},
  });
  const dispatch = useDispatch();
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setRegistrationData((prevregistrationData) => ({
      ...prevregistrationData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateRegistrationForm();
    if (Object.keys(errors).length === 0) {
      dispatch(
        addRegistrationDetails({
          registrationEmail: registrationData.registrationEmail,
          registrationUsername: registrationData.registrationUsername,
          registrationPassword: registrationData.registrationPassword,
        }),
      );
      setTimeout(() => {
        setFormToShow('d');
      }, 1000);
    } else {
      setRegistrationData((prevregistrationData) => ({
        ...prevregistrationData,
        errors,
      }));
    }
  };

  const validateRegistrationForm = () => {
    const errors = {};

    // Validación para registrationEmail
    if (
      !registrationData.registrationName.match(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/,
      )
    ) {
      errors.registrationName = 'Ingrese un Email válido Ej: example@gmail.com';
    }

    // Validación para registrationPassword
    if (
      !registrationData.registrationUsername.match(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/)
    ) {
      errors.registrationSurname = 'Ingrese un nombre de usuario válido';
    }

    // Validación para registrationPassword
    if (
      !registrationData.registrationPassword.match(
        /^(?=.*[a-zA-Z0-9])(?!.*[\s-áéíóúÁÉÍÓÚñÑ]).{8,16}$/,
      )
    ) {
      errors.registrationDni =
        'Ingrese una contraseña válida (8 a 16 caracteres) sin espacios ni acentos';
    }

    setIsValid(Object.keys(errors).length === 0);
    return errors;
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
