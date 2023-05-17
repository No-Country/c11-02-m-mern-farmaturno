import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Stack from "react-bootstrap/Stack";
import "./FormUserStyle.css";
import ToggleButton from "react-bootstrap/ToggleButton";

const FormUser = () => {
  const [show, setShow] = useState(false);
  const [radioValue, setRadioValue] = useState("0");
  const [titulo, setTitulo] = useState("Elige un horario");
  const [isHorarioElegido, setIsHorarioElegido] = useState(false);
  const [isTurnoDisponible, setIsTurnoDisponible] = useState(false);

  const radios = [];

  for (let i = 8; i <= 19; i++) {
    const radio = {
      name: `${i < 10 ? "0" : ""}${i} hs`,
      value: (i - 7).toString(),
    };
    radios.push(radio);
  }
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handlechoose = (event) => {
    const { value, dataset } = event.currentTarget;
    setRadioValue(value);
    setTitulo(dataset.name);
    setIsHorarioElegido(true);
    setIsTurnoDisponible(true);
    handleClose();
  };

  return (
    <>
      <Container className="container">
        <Form>
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
              />
            </Form.Group>

            <Form.Group className="mb-3" as={Col} controlId="formGridLastname">
              <Form.Label>Apellido</Form.Label>
              <Form.Control
                className="form"
                type="name"
                placeholder="Ingrese su Apellido"
              />
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
              />
            </Form.Group>

            <Form.Group className="mb-3" as={Col}>
              <Button
                className={`buttonHorario mt-5 ${
                  isHorarioElegido ? "buttonHorario--inactive" : ""
                }`}
                variant="secondary"
                onClick={handleShow}
              >
                {titulo}
              </Button>
            </Form.Group>
          </Row>
          <br />

          <Stack gap={2} className="col-md-5 mx-auto">
            <Button
              className={`buttonTurno ${
                isTurnoDisponible ? "buttonTurno--active" : ""
              }`}
              variant="secondary"
              type="submit"
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
          {radios.map((radio, idx) => (
            <ToggleButton
              className="buttonModal "
              key={idx}
              id={`radio-${idx}`}
              type="radio"
              variant="success"
              name="radio"
              value={radio.value}
              checked={radioValue === radio.value}
              // onChange={(e) => setRadioValue(e.currentTarget.value)}
              onClick={handlechoose}
              data-name={radio.name}
            >
              {radio.name}
            </ToggleButton>
          ))}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default FormUser;
