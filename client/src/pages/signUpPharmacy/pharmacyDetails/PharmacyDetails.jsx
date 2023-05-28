import { Button, Form } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import { useContext, useState } from 'react';
import { SignUpContext } from '../context/pharmacyContext';
import './pharmacyDetails.css';
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
    <div className="pharmacy-details">
      <h2>Datos de la farmacia</h2>
      <p>
        A continuación, completa los campos con la información de tu farmacia.
      </p>

      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="custom-row">
          <Form.Label className="label">Nombre de la farmacia</Form.Label>
          <Form.Control required type="text" />
        </Row>
        <Row className="custom-row">
          <Form.Label className="label">NIT</Form.Label>
          <Form.Control required type="number" />
        </Row>
        <Row className="custom-row">
          <Form.Label className="label">Ciudad</Form.Label>
          <Form.Control required type="number" />
        </Row>
        <Row className="custom-row">
          <Form.Label className="label">Dirección</Form.Label>
          <Form.Control required type="number" />
        </Row>
        <Row className="custom-row">
          <Form.Label className="label">
            Número telefónico (opcional)
          </Form.Label>
          <Form.Control type="number" />
        </Row>
        <Row className="custom-row">
          <Form.Label className="label">Horario de apertura </Form.Label>
          <Form.Control required type="text" />
        </Row>
        <Row className="custom-row">
          <Form.Label className="label">Horario de cierre</Form.Label>
          <Form.Control required type="text" />
        </Row>
        <Button variant={`secondary`} type="submit" onClick={handleClick}>
          Siguiente
        </Button>
      </Form>
    </div>
  );
};

export default PharmacyDetails;
