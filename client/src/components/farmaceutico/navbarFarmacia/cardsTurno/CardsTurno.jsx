import React, { useState } from 'react';
import { Card, Button, Col, Stack, Row, Table, Badge } from 'react-bootstrap';
import '../cardsTurno/cardsTurnoStyle.css';
import FormCheckInput from 'react-bootstrap/esm/FormCheckInput';
import { useUpdateEstadoTurnoMutation } from '../../../../redux/turnSlices';

const CardsTurno = ({ turnoTardeNumero, data }) => {
  const [updateState] = useUpdateEstadoTurnoMutation();

  const confirmar = (_id) => {
    updateState({ status: false, _id });
  };

  return (
    <>
      <div className="divTabla">
        <Table className="tabla">
          <tbody>
            {data.map((turn) => (
              <>
                <tr key={turn._id} className="divFilas">
                  <td>
                    <div className="div1">
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

                      <p className="tx-tabla tx-turnoId">
                        Turno: {turn._id.substring(0, 4)}{' '}
                      </p>

                      <p className="tx-tabla tx-turno">{turn.timeSlot}</p>
                    </div>
                  </td>
                  <td className="">
                    <div className="div2">
                      <div className="divName">
                        <p className="tx-tabla tx-name">
                          {turn.customer.name} {turn.customer.surName}
                        </p>
                      </div>
                      <div className="divEmail">
                        <Stack
                          direction="horizontal"
                          gap={3}
                          className=" tx-email"
                        >
                          <img
                            src="https://i.ibb.co/dW8nLvg/Vector-2.png"
                            alt=""
                            className="iconosCards mb-3"
                          />
                          <p className="tx-tabla tx-email">
                            {turn.customer.customerEmail}
                          </p>
                        </Stack>
                      </div>
                      <div className="divId">
                        <Stack direction="horizontal" gap={3}>
                          <img
                            src="https://i.ibb.co/chhy7gC/Vector-1.png"
                            alt=""
                            className="iconosCards mb-3"
                          />
                          <p className="tx-tabla">
                            {turn.customer.identificationNumber}
                          </p>
                        </Stack>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="div3">
                      {turn.status ? (
                        <Button
                          onClick={(e) => confirmar(turn._id)}
                          variant="white"
                          className="btnCheckbox"
                        >
                          <img
                            src="https://i.ibb.co/dLfgZKs/ic-check-box-outline-blank-24px.png"
                            className="checkbox"
                            alt=""
                          />
                        </Button>
                      ) : (
                        <img
                          src="https://i.ibb.co/KhBckv4/Checkbox.png"
                          alt=""
                          className="checkbox"
                        />
                      )}
                    </div>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default CardsTurno;
