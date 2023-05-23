import React from 'react'
import NavbarFarmaceutico from '../../components/farmaceutico/navbarFarmacia/NavbarFarmaceutico'
import { Container,Row, Col, Card, Button } from 'react-bootstrap'
import "../pagePerfilFarmaceutico/pageHomeFarmacia.css"

const PageHomeFarmacia = () => {
  return (
    <>
   <NavbarFarmaceutico/>
   <Row className='mb-2'>
    <p className='titulo mt-4 mx-4'>¿Qué quieres hacer?</p>
    <Col sm={12} md={4}>
    <Card className="mx-4  my-1">
      <Card.Body>
        <Card.Title className='tituloCard'>Nuevos turnos</Card.Title>
        <Card.Text className='tituloText'>
        Habilita la cantidad de turnos que desees, por hora.        </Card.Text>
        <Button className="btnVerMas d-block mx-auto">Ver más</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col sm={12} md={4}>
    <Card className="mx-4  my-1">
      <Card.Body>
        <Card.Title className='tituloCard'>Turnos reservados</Card.Title>
        <Card.Text className='tituloText'>
        Gestiona y visualiza los turnos que ya fueron reservados por tus clientes.        </Card.Text>
        <Button className="btnVerMas d-block mx-auto"variant="primary">Ver más</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col sm={12} md={4}>
    <Card className="mx-4  my-1">
      <Card.Body>
        <Card.Title className='tituloCard'>Reserva de turno manualmente</Card.Title>
        <Card.Text className='tituloText'>
        Utiliza esta funcionalidad para reservar un turno a un cliente.        </Card.Text>
        <Button className="btnVerMas d-block mx-auto"variant="primary">Ver más</Button>
      </Card.Body>
    </Card>
    </Col>
  

   </Row>


    </>
  )
}

export default PageHomeFarmacia