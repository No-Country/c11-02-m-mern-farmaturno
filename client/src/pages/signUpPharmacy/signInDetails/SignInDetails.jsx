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
import logo from '../assets/pana.png';

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

      postTurn(data, 'api/pharmacy')
        .then((response) => {
          console.log(response);
          alert('Su cuenta ha sido creada con éxito');
          setTimeout(() => {
            navigate('adminitration_allowed');
          }, 1500);
        })
        .catch((error) => {
          console.error(error);
          alert(
            'Hubo un error al crear su cuneta, revise que todos los datos sean correctos y que no haya creado otra cuenta con los mismos datos',
          );
        });
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
      <div className="farmacyTitle_container">
        <h2>Datos de inicio de sesión</h2>
        <p>
          Por último, completa los campos con la información correspondiente.
          Recuerda que estos son los datos que usarás para iniciar sesión.
        </p>
      </div>
      <Form noValidate onSubmit={handleSubmit}>
        <Row className="custom-row row1">
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
        <Row className="custom-row row2">
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
        <Row className="custom-row row3">
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
        <Form.Group className="mb-3 row4" id="formGridCheckbox">
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
        <img src={logo} alt="imagen descriptiva" />
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
