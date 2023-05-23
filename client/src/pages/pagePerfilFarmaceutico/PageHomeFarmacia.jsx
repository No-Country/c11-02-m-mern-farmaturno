import React from 'react'
import NavbarFarmaceutico from '../../components/farmaceutico/navbarFarmacia/NavbarFarmaceutico'
import { Container,Row, Col, Card, Button } from 'react-bootstrap'

const PageHomeFarmacia = () => {
  return (
    <>
   <NavbarFarmaceutico/>
   <Row>
    <p>¿Qué quieres hacer?</p>
    <Col sm={12} md={4}>
    <Card className="m-4">
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col sm={12} md={4}>
    <Card className="m-4">
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>

    <Col sm={12} md={4}>
    <Card className="m-4">
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>


   </Row>


    </>
  )
}

export default PageHomeFarmacia