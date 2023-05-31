import NavbarFarmaceutico from '../../components/farmaceutico/navbarFarmacia/NavbarFarmaceutico';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../pagePerfilFarmaceutico/pageHomeFarmacia.css';
import { ButtonEstado } from '../../components/farmaceutico/navbarFarmacia/BotonConfirmacionTurno';
import Footer from '../../components/Footer/Footer';
import { useGetTurnsQuery } from '../../services/apiSlices';
import moment from 'moment';
import CardsTurno from '../../components/farmaceutico/navbarFarmacia/cardsTurno/CardsTurno';

const PageHomeFarmacia = () => {
  const currentDate = moment().format(' D/MM/YYYY');
  const currentTime = moment().format('HH');
  // const turnoTarde = (moment().add(1, 'hours').format('HH'))
  const turnoTardeNumero = parseInt(currentTime)


  const { data, isError, isLoading, error } = useGetTurnsQuery(); //ME PUEDO DVOLVER LA DATA, EL ERROR(TRUE FALSE), PROPIEDAD IS LOADING (TRUEFALSE), ERROR CUAL ES EL ERROR

  if (isLoading) return <div>Loading...</div>;
  else if (isError) return <div>Error:{error}</div>;
  // console.log(data);

  return (
    <>
      <div className="homeFarmacia">
        {/* <NavbarFarmaceutico /> */}
        <Container className="bodyHomeFarmacia">
          <h1>Turnos reservados</h1>
          <p>
            Gestiona y visualiza los turnos que ya fueron reservados por tus
            clientes, junto a sus datos personales.
          </p>
          <p>Fecha de hoy: {currentDate}</p>
          <p>Horario de atención: de 7:00 a 19:00</p>
          <p>hora turno tarde: {turnoTardeNumero}</p>
          
          <Row sm={12} lg={12}>
            <Col>
            {data.map((turn) =>
              turn.status ? (
               Number(turn.timeSlot.substring(0,2))>=turnoTardeNumero ? (
                   <CardsTurno turn={turn} cardType="proximo" key={turn._id}/>
                ) : (
                   <CardsTurno turn={turn} cardType="tarde" key={turn._id}/>
                )
              ) : (
                <CardsTurno turn={turn} cardType="atendido" key={turn._id}/>
              ),
            )}
            </Col>







            <Container>
      <Row className="mi-tabla">
        <Col lg={2} md={12} sm={12}>
          <p>Columna 1</p>
        </Col>
        <Col lg={2} md={6} sm={6}>
          <p>Columna 2</p>
        </Col>
        <Col lg={2} md={6} sm={6}>
          <p>Columna 3</p>
        </Col>
        <Col lg={2} md={6} sm={6}>
          <p>Columna 4</p>
        </Col>
        <Col lg={2} md={6} sm={6}>
          <p>Columna 5</p>
        </Col>
        <Col lg={2} md={6} sm={6}>
          <p>Columna 6</p>
        </Col>
        <Col lg={2} md={12} sm={12}>
          <p>Columna 7</p>
        </Col>
      </Row>
    </Container>









            

            <Col sm={12}>
              <Footer />
            </Col>
          </Row>
        </Container>


      </div>
    </>
  );
};

export default PageHomeFarmacia;
