import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Stack from 'react-bootstrap/Stack';
import './FormUserStyle.css';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { useState, useEffect } from 'react';

const FormUser = () => {
  const [show, setShow] = useState(false);

  const [hour, setHour] = useState(0);
  const [isHorarioElegido, setIsHorarioElegido] = useState(false);
  const [isTurnoDisponible, setIsTurnoDisponible] = useState(false);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [isCheckboxError, setIsCheckboxError] = useState(false);

  const [validated, setValidated] = useState(false);

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [nameError, setNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [nameValid, setNameValid] = useState(false);
  const [lastNameValid, setLastNameValid] = useState(false);
  const [phoneValid, setPhoneValid] = useState(false);

  const expresiones = {
    name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    phone: /^\d{10}$/, // 7 a 14 numeros.
  };

  const horarios = [];
  for (let i = 8; i <= 19; i++) {
    const hora = {
      name: `${i < 10 ? 0 : ''}${i} `,
      value: (i - 7).toString(),
    };
    horarios.push(hora);
  }
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleNameChange = (e) => {
    setName(e.target.value);
    if (!expresiones.name.test(e.target.value)) {
      setNameError('El nombre sólo puede contener letras, espacios y acentos');
      setNameValid(false);
    } else if (e.target.value.length < 3) {
      setNameError('El nombre debe contener al menos 3 digitos');
      setNameValid(false);
    } else {
      setNameError('');
      setNameValid(true);
    }
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
    if (!expresiones.name.test(e.target.value)) {
      setLastNameError(
        'El apellido sólo puede contener letras, espacios y acentos',
      );
      setLastNameValid(false);
    } else {
      setLastNameError('');
      setLastNameValid(true);
    }
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
    if (!expresiones.phone.test(e.target.value)) {
      setPhoneError('El nro de letefono debe tener 10 digitos');
      setPhoneValid(false)
    } else {
      setPhoneError('');
      setPhoneValid(true);
    }
  };

  const handleCheckboxChange = (e) => {
    setIsCheckboxChecked(e.target.checked);
    setIsCheckboxError(false);
  };

  const handlechoose = (event) => {
    const { value, dataset } = event.currentTarget;

    setHour(dataset.name);
    setIsHorarioElegido(true);
    setIsTurnoDisponible(true);
    handleClose();
  };

  const resetForm = () => {
    setName('');
    setLastName('');
    setPhone('');
    setHour(0);
    setIsHorarioElegido(false);
    setIsTurnoDisponible(false);
    setValidated(false);
    setIsCheckboxChecked(false);
    setIsCheckboxError(false);
    setNameValid(false);
    setLastNameValid(false);
    setPhoneValid(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nameValid && lastNameValid && phoneValid) {
      if (isCheckboxChecked) {
        setValidated(true);
        const formData = {
          name,
          lastName,
          phone,
          hour,
        };
        console.log(formData);
        resetForm()
      } else {
        setIsCheckboxError(true);
      }
    }
  };

  return (
    <>
      <Container className="container">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <h1>Farmacia Cruz Verde</h1>
          <h2>/Direccion</h2>
          <h2 className="mb-3">/Horario de atencion</h2>
          <Row className="justify-content-md-center">
            <Form.Group className="mb-3" as={Col} controlId="formGridName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                className="form"
                type="name"
                placeholder="Ingrese su nombre"
                required
                value={name}
                onChange={handleNameChange}
                isInvalid={nameError !== ''}
                isValid={nameValid}
              />
              <Form.Control.Feedback type="invalid" className="custom-feedback">
                {nameError}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" as={Col} controlId="formGridLastname">
              <Form.Label>Apellido</Form.Label>
              <Form.Control
                className="form"
                type="name"
                placeholder="Ingrese su Apellido"
                required
                value={lastName}
                onChange={handleLastNameChange}
                isInvalid={lastNameError !== ''}
                isValid={lastNameValid}
              />
              <Form.Control.Feedback type="invalid" className="custom-feedback">
                {lastNameError}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <br />
          <Row className="justify-content-md-center">
            <Form.Group className="mb-3" as={Col} controlId="formGridNumber">
              <Form.Label>Número telefónico</Form.Label>
              <Form.Control
                className="form"
                type="number"
                placeholder="Ingrese su número telefónico"
                required
                inputMode="numeric"
                value={phone}
                onChange={handlePhoneChange}
                isInvalid={phoneError !== ''}
                isValid={phoneValid}
              />
              <Form.Control.Feedback type="invalid" className="custom-feedback">
                {phoneError}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" as={Col}>
              <Button
                className={`buttonHorario mt-5 ${
                  isHorarioElegido ? 'buttonHorario--inactive' : ''
                }`}
                variant="secondary"
                onClick={handleShow}
                disabled={!nameValid || !lastNameValid || !phoneValid}
              >
                {isHorarioElegido ? hour : "Elige un horario"}
              </Button>
            </Form.Group>
          </Row>
          <br />
          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check
              type="checkbox"
              label="Acepto los terminos y condiciones y autorizo el uso de mis datos de acuerdo a la Declaracion de privacidad"
              required
              checked={isCheckboxChecked}
              onChange={handleCheckboxChange}
              isInvalid={isCheckboxError}
            />
          </Form.Group>

          <Stack gap={2} className="col-md-5 mx-auto">
            <Button
              className={`buttonTurno ${
                isTurnoDisponible ? 'buttonTurno--active' : ''
              }`}
              variant="secondary"
              type="submit"
              disabled={!isTurnoDisponible}
            >
              PEDIR TURNO
            </Button>
          </Stack>
        </Form>
      </Container>

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
              name="hora"
              value={hora.value}
              checked={hora === hora.value}
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
