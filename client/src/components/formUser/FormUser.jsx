import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Stack from "react-bootstrap/Stack";
import Ratio from "react-bootstrap/Ratio";
import "./FormUserStyle.css";

const FormUser = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Container className="container">
        <Form >
          <h1>Farmacia Cruz Verde</h1>
          <h2 className="mb-3">/Direccion/Horario de atencion</h2>
          <Row className="justify-content-md-center">
            <Form.Group className="mb-3" as={Col}  controlId="formGridName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control className="form" type="name" placeholder="Ingrese su nombre" />
            </Form.Group>

            <Form.Group  className="mb-3"as={Col}  controlId="formGridLastname">
              <Form.Label>Apellido</Form.Label>
              <Form.Control className="form" type="name" placeholder="Ingrese su Apellido" />
            </Form.Group>
          </Row>
          <br />
          <Row className="justify-content-md-center">
            <Form.Group className="mb-3" as={Col}  controlId="formGridNumber">
              <Form.Label>Número telefónico</Form.Label>
              <Form.Control
              className="form"
                type="number"
                placeholder="Ingrese su número telefónico"
              />
            </Form.Group>

            <Form.Group className="mb-3" as={Col}  >
              
              <Button className="button2 mt-5" variant="secondary"   onClick={handleShow}>
              ELEGIR HORARIO
            </Button>
            </Form.Group>
          </Row>
          <br />

          <Stack gap={2} className="col-md-5 mx-auto">
            <Button className="button" variant="secondary" type="submit">
              PEDIR TURNO
            </Button>
          </Stack>
        </Form>
      </Container>


      {/* modal elegir horario */}

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FormUser;
