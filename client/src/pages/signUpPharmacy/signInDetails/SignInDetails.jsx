import { Button, Form } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router';
import { useContext, useState } from 'react';
import { SignUpContext } from '../context/pharmacyContext';
import './signInDetails.css';
import { addRegistrationDetails } from '../../../redux/authSlice';
import { useDispatch } from 'react-redux';
import { postTurn } from '../../../services/PostTurn';
import { useSelector } from 'react-redux';

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
  const {
    ownerName,
    ownerSurname,
    ownerDni,
    pharmacyName,
    pharmacyNit,
    pharmacyCity,
    pharmacyAdress,
    pharmacyPhone,
    pharmacyOpenHour,
    pharmacyCloseHour,
  } = useSelector((state) => state.auth);

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
      }, 500);

      const data = {
        name: ownerName,
        surName: ownerSurname,
        identificationNumber: parseInt(ownerDni),
        companyName: pharmacyName,
        nit: pharmacyNit,
        city: pharmacyCity,
        address: pharmacyAdress,
        phone: parseInt(pharmacyPhone),
        email: registrationData.registrationEmail,
        hourAttention: `${pharmacyOpenHour}-${pharmacyCloseHour}`,
        userName: registrationData.registrationUsername,
        password: registrationData.registrationPassword,
      };
      /*       const data = {
        name: 'Marquetos',
        surName: 'Martilo',
        identificationNumber: 1234667127,
        companyName: 'farmciaprueba',
        nit: '123412345',
        city: 'venezuela',
        address: 'laprida',
        phone: 3456789012,
        email: 'marquetos@marquetos.com',
        hourAttention: '07:00-17:00',
        userName: 'diana123',
        password: 'hackeamee1233',
      }; */
      postTurn(data, 'api/pharmacy');
      setTimeout(() => {
        /*         console.log(data); */
        navigate('adminitration_allowed');
      }, 1500);
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
      !registrationData.registrationEmail.match(
        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
      )
    ) {
      errors.registrationEmail =
        'Ingrese un Email válido Ej: example@gmail.com';
    }

    // Validación para registrationPassword
    if (
      !registrationData.registrationUsername.match(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/)
    ) {
      errors.registrationUsername = 'Ingrese un nombre de usuario válido';
    }

    // Validación para registrationPassword
    if (
      !registrationData.registrationPassword.match(
        /^(?=.*[a-zA-Z0-9])(?!.*[\s-áéíóúÁÉÍÓÚñÑ]).{8,16}$/,
      )
    ) {
      errors.registrationPassword =
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
      <Form noValidate onSubmit={handleSubmit}>
        <Row className="custom-row">
          <Form.Label className="label">Correo electrónico</Form.Label>
          <Form.Control
            required
            type="text"
            name="registrationEmail"
            value={registrationData.registrationEmail}
            onChange={handleChange}
            isInvalid={!isValid && !!registrationData.errors.registrationEmail}
            isValid={isValid && !registrationData.errors.registrationEmail}
          />
          <Form.Control.Feedback type="invalid">
            {registrationData.errors.registrationEmail}
          </Form.Control.Feedback>
        </Row>
        <Row className="custom-row">
          <Form.Label className="label">Usuario</Form.Label>
          <Form.Control
            required
            type="text"
            name="registrationUsername"
            value={registrationData.registrationUsername}
            onChange={handleChange}
            isInvalid={
              !isValid && !!registrationData.errors.registrationUsername
            }
            isValid={isValid && !registrationData.errors.registrationUsername}
          />
          <Form.Control.Feedback type="invalid">
            {registrationData.errors.registrationUsername}
          </Form.Control.Feedback>
        </Row>
        <Row className="custom-row">
          <Form.Label className="label">Contraseña</Form.Label>
          <Form.Control
            required
            type="password"
            name="registrationPassword"
            value={registrationData.registrationPassword}
            onChange={handleChange}
            isInvalid={
              !isValid && !!registrationData.errors.registrationPassword
            }
            isValid={isValid && !registrationData.errors.registrationPassword}
          />
          <Form.Control.Feedback type="invalid">
            {registrationData.errors.registrationPassword}
          </Form.Control.Feedback>
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
        <Button
          variant={`${isValid ? 'success' : 'secondary'}`}
          type="submit"
          onClick={handleSubmit}
        >
          Regístrate
        </Button>
      </Form>
    </div>
  );
};

export default SignInDetails;
