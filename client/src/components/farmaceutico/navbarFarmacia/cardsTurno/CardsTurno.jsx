import React, { useState } from 'react';
import { Card, Button, Col, Stack, Row, Table, Badge } from 'react-bootstrap';
import '../cardsTurno/cardsTurnoStyle.css';
import FormCheckInput from 'react-bootstrap/esm/FormCheckInput';
import { useUpdateEstadoTurnoMutation } from '../../../../redux/turnSlices';

const CardsTurno = ({ turn, turnoTardeNumero }, _id) => {
  const [updateState] = useUpdateEstadoTurnoMutation();

  const [disabled, setDisabled] = useState(false);

  const confirmar = (_id) => {
    updateState({ status: false, _id });
    setDisabled(true);
  };

  return (
    <>
      <Table size="sm" className="justify-content-center align-item-center">
        <tbody>
          <tr>
            <td>
              <Row>
                <Col>
                  {turn.status ? (
                    Number(turn.timeSlot.substring(0, 2)) >=
                    turnoTardeNumero ? (
                      <Badge className="badge-proximo badge">Proximo</Badge>
                    ) : (
                      <Badge className="badge-tarde badge">Tarde</Badge>
                    )
                  ) : (
                    <Badge className="badge-atendido badge">Atendido</Badge>
                  )}
                </Col>
                <Col>
                  <p className="tx-tabla">Turno: </p>
                </Col>
                <Col>
                  <p className="tx-tabla">{turn.timeSlot}</p>
                </Col>
              </Row>
            </td>
            <td>
              <Row>
                <Col>
                  <p className="tx-tabla">
                    {turn.customer.name} {turn.customer.surName}
                  </p>
                </Col>
                <Col>
                  <img
                    src="https://i.ibb.co/chhy7gC/Vector-1.png"
                    alt=""
                    className="iconosCards"
                  />
                  <p className="tx-tabla"> {turn.customer.mobilePhone}</p>
                </Col>
                <Col>
                  <p className="tx-tabla">
                    {turn.customer.identificationNumber}
                  </p>
                </Col>
              </Row>
            </td>
            <td>
              <FormCheckInput
                onClick={(e) => confirmar(turn._id)}
                disabled={disabled}
                className="checkbox"
              />
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default CardsTurno;
