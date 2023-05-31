import React from 'react'
import {Card, Button,Col } from 'react-bootstrap';
import { ButtonEstado } from '../BotonConfirmacionTurno';
import "../cardsTurno/cardsTurnoStyle.css"
import FormCheckInput from 'react-bootstrap/esm/FormCheckInput';

const CardsTurno = ({turn,cardType}) => {
    
  return (
    <Card className={cardType}  >
    <Card.Body>
      <Card.Text className="tituloText">
          <Col lg={6}>
          <Button> boton colores</Button>
          </Col>
          <Col>
          <p>Turno: </p>
          <p>{turn.timeSlot}</p>
          <p>{turn.customer.name} {turn.customer.surName}</p>
          <p> {turn.customer.mobilePhone}</p>
            <img src="https://i.ibb.co/chhy7gC/Vector-1.png" alt="" className='iconosCards'/>
          <p>{turn.customer.identificationNumber}</p>
          </Col>
          <FormCheckInput/>
      </Card.Text>
      <ButtonEstado _id={turn._id} />
    </Card.Body>
  </Card>
  )
}

export default CardsTurno