import { Button, Form } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import { useContext, useState } from 'react';
import { SignUpContext } from '../context/pharmacyContext';
import './pharmacyOwner.css';

const PharmacyOwnerDetails = () => {
  const { setFormToShow } = useContext(SignUpContext);
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const handleClick = () => {
    setFormToShow('b');
  };
  return (
    <div className="pharmacy-owner">
      <h2>Datos del encargado/responsable</h2>
      <p>
        Para comenzar, completa los campos con la información del responsable de
        la farmacia.
      </p>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="custom-row">
          <Form.Label className="label">Nombre</Form.Label>
          <Form.Control required type="text" />
        </Row>
        <Row className="custom-row">
          <Form.Label className="label">Apellido</Form.Label>
          <Form.Control required type="text" />
        </Row>
        <Row className="custom-row">
          <Form.Label className="label">Número de identidad</Form.Label>
          <Form.Control required type="number" />
        </Row>
        <Button variant={`secondary`} type="submit" onClick={handleClick}>
          Siguiente
        </Button>
      </Form>
    </div>
  );
};

export default PharmacyOwnerDetails;
