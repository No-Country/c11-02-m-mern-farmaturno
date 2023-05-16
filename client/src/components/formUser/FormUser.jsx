import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Stack from 'react-bootstrap/Stack';
import Ratio from 'react-bootstrap/Ratio';

const FormUser = () => {
 

  return (
    <>
    <Ratio aspectRatio="16x9">
    <div style={{ width: 660, height: 'auto' }}>

    <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="name" placeholder="Ingrese su nombre" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLastname">
            <Form.Label>Apellido</Form.Label>
            <Form.Control type="name" placeholder="Ingrese su Apellido" />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridNumber">
            <Form.Label>Número telefónico</Form.Label>
            <Form.Control
              type="number"
              placeholder="Ingrese su número telefónico"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Tu turno</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        </Row>

        <Stack gap={2} className="col-md-5 mx-auto">
        <Button variant="secondary" type="submit" >
          Pedir turno
        </Button>
    </Stack>

        
      </Form>
      </div>
        
      </Ratio>
      

      
    </>
  );
};

export default FormUser;
