import { Button, Form } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import { useContext, useState } from 'react';
import { SignUpContext } from '../context/pharmacyContext';
const PharmacyDetails = () => {
  const { setFormToShow } = useContext(SignUpContext);
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const handleClick = () => {
    setFormToShow('c');
  };
  return (
    <div>
      <div>
        <h2>Datos de la farmacia</h2>
        <p>
          A continuación, completa los campos con la información de tu farmacia.
        </p>
      </div>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Label>Nombre de la farmacia</Form.Label>
          <Form.Control required type="text" />
        </Row>
        <Row className="mb-3">
          <Form.Label>NIT</Form.Label>
          <Form.Control required type="number" />
        </Row>
        <Row className="mb-3">
          <Form.Label>Ciudad</Form.Label>
          <Form.Control required type="number" />
        </Row>
        <Row className="mb-3">
          <Form.Label>Dirección</Form.Label>
          <Form.Control required type="number" />
        </Row>
        <Row className="mb-3">
          <Form.Label>Número telefónico (opcional)</Form.Label>
          <Form.Control type="number" />
        </Row>
        <Row className="mb-3">
          <Form.Label>Horario de apertura </Form.Label>
          <Form.Control required type="text" />
        </Row>
        <Row className="mb-3">
          <Form.Label>Horario de cierre</Form.Label>
          <Form.Control required type="text" />
        </Row>
        <Button type="submit" onClick={handleClick}>
          Siguiente
        </Button>
      </Form>
    </div>
  );
};

export default PharmacyDetails;
