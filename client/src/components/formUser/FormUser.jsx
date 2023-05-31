import { useState } from 'react';
import { Container, Form, Row, Col, Button, Modal } from 'react-bootstrap';
import { ToggleButton, Stack } from 'react-bootstrap';
import './FormUserStyle.css';
import { addUser, addTimeSlot } from '../../redux/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import ModalToConfirmYourTurn from '../Modals/ModalConfirmTurn';
import { postTurn } from '../../services/PostTurn';

const FormUser = () => {
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);
  const [seeModalConfirm, setSeeModalConfirm] = useState(false);
  const { name, surName, emailCustomer, timeSlot, identificationNumber } =
    useSelector((state) => state.user);
  const [formData, setFormData] = useState({
    name: name,
    lastName: surName,
    email: emailCustomer,
    hour: timeSlot,
    isCheckboxChecked: false,
    isTurnoDisponible: false,
    isHorarioElegido: false,
  });
  const [errors, setErrors] = useState({
    name: '',
    lastName: '',
    email: '',
    isCheckboxChecked: '',
  });

  const [valid, setValid] = useState({
    name: false,
    lastName: false,
    email: false,
  });

  const dispatch = useDispatch();

  const expresiones = {
    name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
  };

  const horarios = [];
  for (let i = 8; i <= 19; i++) {
    const hora = {
      name: `${i < 10 ? '0' + i + ':00' : i + ':00'}`,
      value: (i - 7).toString(),
    };
    horarios.push(hora);
  }
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    validateField(name, value);
  };
  const handleCheckboxChange = (e) => {
    const { checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      isCheckboxChecked: true,
    }));
  };

  const handlechoose = (event) => {
    const { value, dataset } = event.currentTarget;
    setFormData((prevData) => ({
      ...prevData,
      hour: dataset.name,
      range: dataset.value,
      isHorarioElegido: true,
      isTurnoDisponible: true,
    }));

    handleClose();
  };

  const validateField = (name, value) => {
    let errorMessage = '';

    switch (name) {
      case 'name':
      case 'lastName':
        if (!expresiones.name.test(value)) {
          errorMessage = `El ${name} sólo puede contener letras, espacios y acentos`;
          setValid((prevValid) => ({
            ...prevValid,
            [name]: false,
          }));
        } else if (value.length < 3) {
          errorMessage = `El ${name} debe contener al menos 3 dígitos`;
          setValid((prevValid) => ({
            ...prevValid,
            [name]: false,
          }));
        } else {
          setValid((prevValid) => ({
            ...prevValid,
            [name]: true,
          }));
        }
        break;

      case 'email':
        if (!expresiones.email.test(value)) {
          errorMessage = 'El número telefónico debe tener 10 dígitos';
          setValid((prevValid) => ({
            ...prevValid,
            [name]: false,
          }));
        } else {
          setValid((prevValid) => ({
            ...prevValid,
            [name]: true,
          }));
        }
        break;
      default:
        break;
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errorMessage,
    }));
    console.log(errorMessage);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    if (valid.name & valid.lastName & valid.phone) {
      if (form.checkValidity()) {
        if (formData.isCheckboxChecked) {
          setValidated(true);
          dispatch(
            addUser({
              name: formData.name,
              surName: formData.lastName,
              emailCustomer: formData.phone,
            }),
          );
          dispatch(addTimeSlot({ timeSlot: formData.range }));

          const data = {
            name: formData.name,
            surName: formData.lastName,
            emailCustomer: formData.email,
            timeSlot: formData.hour,
            identificationNumber,
          };
          console.log(data);
          postTurn(data, 'api/turn/');

          resetForm();
        } else {
          setErrors((prevErrors) => ({
            ...prevErrors,
            isCheckboxChecked: 'Debes aceptar los términos y condiciones',
          }));
        }
      } else {
        setValidated(true);
      }
    }
  };

  const resetForm = () => {
    setFormData({
      name: name,
      lastName: surName,
      email: emailCustomer,
      hour: 0,
      range: timeSlot,
      isCheckboxChecked: false,
      isHorarioElegido: false,
      isTurnoDisponible: false,
    });
    setValidated(false);
    setErrors({
      name: '',
      lastName: '',
      email: '',
      isCheckboxChecked: false,
    });
    // setValid({
    //   name: false,
    //   lastName: false,
    //   phone: false,
    // });
  };

  return (
    <>
      {seeModalConfirm && (
        <ModalToConfirmYourTurn closeMenu={() => setSeeModalConfirm(false)} />
      )}
      <div className="container">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <h1 className="titulo">Farmacia Cruz Verde</h1>
          <p className="mb-0 info">/Direccion</p>
          <p className="mb-3 info">/Horario de atencion</p>
          <Row className="justify-content-md-center">
            <Form.Group className="mb-3" as={Col} controlId="formGridName">
              <Form.Label className="texto">Nombre</Form.Label>
              <Form.Control
                className="form"
                type="name"
                placeholder="Ingrese su nombre"
                required
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                isInvalid={errors.name !== ''}
                isValid={valid.name}
              />
              <Form.Control.Feedback type="invalid" className="custom-feedback">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" as={Col} controlId="formGridLastname">
              <Form.Label className="texto">Apellido</Form.Label>
              <Form.Control
                className="form"
                type="name"
                placeholder="Ingrese su Apellido"
                required
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                isInvalid={errors.lastName !== ''}
                isValid={valid.lastName}
              />
              <Form.Control.Feedback type="invalid" className="custom-feedback">
                {errors.lastName}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <br />
          <Row className="justify-content-md-center">
            <Form.Group className="mb-3" as={Col} controlId="formGridNumber">
              <Form.Label className="texto">Correo electrónico</Form.Label>
              <Form.Control
                className="form"
                type="email"
                placeholder="Ingrese su número correo electrónico"
                required
                
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                isInvalid={errors.email !== ''}
                isValid={valid.email}
              />
              <Form.Control.Feedback type="invalid" className="custom-feedback">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" as={Col}>
              <Button
                className={`buttonHorario mt-5 ${
                  formData.isHorarioElegido ? 'buttonHorario--inactive' : ''
                }`}
                variant="secondary"
                onClick={handleShow}
                disabled={!valid.name || !valid.lastName || !valid.email}
              >
                {formData.isHorarioElegido ? formData.hour : 'Elige un horario'}
              </Button>
            </Form.Group>
          </Row>
          <br />
          <Form.Group className="mb-3 info" id="formGridCheckbox">
            <Form.Check
              type="checkbox"
              label="Acepto los terminos y condiciones y autorizo el uso de mis datos de acuerdo a la Declaracion de privacidad"
              required
              name="isCheckboxChecked"
              checked={formData.isCheckboxChecked}
              onChange={handleCheckboxChange}
              // isinvalid={errors.isCheckboxChecked !== ''}
            />
            <Form.Control.Feedback type="invalid" className="custom-feedback">
              {errors.isCheckboxChecked}
            </Form.Control.Feedback>
          </Form.Group>

          <Stack gap={2} className="col-md-5 mx-auto">
            <Button
              className={`buttonTurno ${
                formData.isTurnoDisponible ? 'buttonTurno--active' : ''
              }`}
              variant="secondary"
              type="submit"
              disabled={!formData.isTurnoDisponible}
              onClick={() => setSeeModalConfirm(true)}
            >
              PEDIR TURNO
            </Button>
          </Stack>
        </Form>
      </div>

      {/* modal elegir horario */}

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Elige un horario</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal">
          {horarios.map((hora, idx) => (
            <ToggleButton
              className="buttonModal "
              key={idx}
              id={`radio-${idx}`}
              type="radio"
              variant="success"
              name="hour"
              data-value={hora.value}
              checked={formData.hour === hora.value}
              // onChange={(e) => setRadioValue(e.currentTarget.value)}
              onClick={handlechoose}
              data-name={hora.name}
            >
              {hora.name}hs
            </ToggleButton>
          ))}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default FormUser;

// const handleNameChange = (e) => {
//   setName(e.target.value);
//   if (!expresiones.name.test(e.target.value)) {
//     setNameError('El nombre sólo puede contener letras, espacios y acentos');
//     setNameValid(false);
//   } else if (e.target.value.length < 3) {
//     setNameError('El nombre debe contener al menos 3 digitos');
//     setNameValid(false);
//   } else {
//     setNameError('');
//     setNameValid(true);
//   }
// };

// const handleLastNameChange = (e) => {
//   setLastName(e.target.value);
//   if (!expresiones.name.test(e.target.value)) {
//     setLastNameError(
//       'El apellido sólo puede contener letras, espacios y acentos',
//     );
//     setLastNameValid(false);
//   } else {
//     setLastNameError('');
//     setLastNameValid(true);
//   }
// };

// const handlePhoneChange = (e) => {
//   setPhone(e.target.value);
//   if (!expresiones.phone.test(e.target.value)) {
//     setPhoneError('El nro de letefono debe tener 10 digitos');
//     setPhoneValid(false)
//   } else {
//     setPhoneError('');
//     setPhoneValid(true);
//   }
// };

// const handleCheckboxChange = (e) => {
//   setIsCheckboxChecked(e.target.checked);
//   setIsCheckboxError(false);
// };

// const handlechoose = (event) => {
//   const { value, dataset } = event.currentTarget;

//   setHour(dataset.name);
//   setIsHorarioElegido(true);
//   setIsTurnoDisponible(true);
//   handleClose();
// };

// const resetForm = () => {
//   setName('');
//   setLastName('');
//   setPhone('');
//   setHour(0);
//   setIsHorarioElegido(false);
//   setIsTurnoDisponible(false);
//   setValidated(false);
//   setIsCheckboxChecked(false);
//   setIsCheckboxError(false);
//   setNameValid(false);
//   setLastNameValid(false);
//   setPhoneValid(false);
// };

// const handleSubmit = (e) => {
//   e.preventDefault();
//   if (nameValid && lastNameValid && phoneValid) {
//     if (isCheckboxChecked) {
//       setValidated(true);
//       const formData = {
//         name,
//         lastName,
//         phone,
//         hour,
//       };
//       console.log(formData);
//       resetForm()
//     } else {
//       setIsCheckboxError(true);
//     }
//   }
// };
