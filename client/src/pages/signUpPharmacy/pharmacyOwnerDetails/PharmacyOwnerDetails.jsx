import { Button, Form } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import { useContext, useState } from 'react';
import { SignUpContext } from '../context/pharmacyContext';

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
    <div>
      <h2>Datos del encargado/responsable</h2>
      <p>
        Para comenzar, completa los campos con la información del responsable de
        la farmacia.
      </p>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control required type="text" />
        </Row>
        <Row className="mb-3">
          <Form.Label>Apellido</Form.Label>
          <Form.Control required type="text" />
        </Row>
        <Row className="mb-3">
          <Form.Label>Número de identidad</Form.Label>
          <Form.Control required type="number" />
        </Row>
        <Button type="submit" onClick={handleClick}>
          Siguiente
        </Button>
      </Form>
    </div>
  );
};

export default PharmacyOwnerDetails;
