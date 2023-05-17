import './panelIngreso.css';

import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';

const PanelIngreso = () => {
  const [validated, setValidated] = useState(false);
  const [dni, setDni] = useState('');
  const [dniError, setDniError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (dni.trim() === '') {
      setDniError('El número de identidad es obligatorio');
      setValidated(false);
    } else if (dni.length !== 10) {
      setDniError('El número de identidad debe tener 10 dígitos');
      setValidated(false);
    } else {
      setDniError('');
      setValidated(true);

      // Realizar acciones adicionales con el DNI
    }
  };

  const handleDniChange = (event) => {
    setDni(event.target.value);
  };

  return (
    <div className="panelIngreso">
      <div className="top-buttons-container">
        <button className="top-button">Pide tu turno</button>
        <button className="top-button">consulta tu turno</button>
      </div>
      <hr />
      <div className="bottom-section">
        <h3>Optimiza tu tiempo y solicita un turno aquí</h3>
        <p>Pide un turno para ser atendido en tu farmacia</p>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group controlId="validationCustom01">
            <Form.Label>Número de identidad </Form.Label>
            <Form.Control
              required
              type="number"
              value={dni}
              onChange={handleDniChange}
              isInvalid={dniError !== ''}
              className="form-control-lg"
            />

            <Form.Control.Feedback type="invalid" className="custom-feedback">
              {dniError}
            </Form.Control.Feedback>

            <Button type="submit" variant="secondary">
              Continuar
            </Button>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default PanelIngreso;
