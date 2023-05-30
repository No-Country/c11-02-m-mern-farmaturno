import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import { ButtonEstado } from '../BotonConfirmacionTurno';
import "../cardsTurno/cardsTurnoStyle.css"

const CardsTurno = ({turn,cardType}) => {
    
  return (
    <Card className={cardType}  >
    <Card.Body>
      <Card.Title className="tituloCard">
        {turn.customer.name} {turn.customer.surName}
      </Card.Title>
      <Card.Text className="tituloText">
        {turn.status ? 'sin confirmar' : 'confirmado'} <br />
        {turn.timeSlot}
      </Card.Text>
      <ButtonEstado _id={turn._id} />
    </Card.Body>
  </Card>
  )
}

export default CardsTurno