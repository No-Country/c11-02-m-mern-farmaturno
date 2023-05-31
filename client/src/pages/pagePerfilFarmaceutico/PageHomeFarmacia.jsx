import NavbarFarmaceutico from '../../components/farmaceutico/navbarFarmacia/NavbarFarmaceutico';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../pagePerfilFarmaceutico/pageHomeFarmacia.css';
import Footer from '../../components/Footer/Footer';
import { useGetTurnsQuery } from '../../services/apiSlices';
import moment from 'moment';
import CardsTurno from '../../components/farmaceutico/navbarFarmacia/cardsTurno/CardsTurno';

const PageHomeFarmacia = () => {
  const currentDate = moment().format(' D/MM/YYYY');
  const currentTime = moment().format('HH ');
  

  const { data, isError, isLoading, error } = useGetTurnsQuery(); //ME PUEDO DVOLVER LA DATA, EL ERROR(TRUE FALSE), PROPIEDAD IS LOADING (TRUEFALSE), ERROR CUAL ES EL ERROR

  if (isLoading) return <div>Loading...</div>;
  else if (isError) return <div>Error:{error}</div>;
  console.log(data);

  return (
    <>
      <div className="homeFarmacia">
        <NavbarFarmaceutico />
        <Container className="bodyHomeFarmacia">
          <h1>Turnos reservados</h1>
          <p>
            Gestiona y visualiza los turnos que ya fueron reservados por tus
            clientes, junto a sus datos personales.
          </p>
          <p>Fecha de hoy: {currentDate}</p>
          <p>Horario de atención: de 7:00 a 19:00</p>
          <p>HORA: {(currentTime)}</p>

          <Row>
            {data.map((turn) =>
              turn.status ? (
               Number(turn.timeSlot.substring(0,2)) <= Number(currentTime)+1 ? (
                  <CardsTurno turn={turn} cardType="proximo" key={turn._id}/>
                ) : (
                  <CardsTurno turn={turn} cardType="tarde" key={turn._id}/>
                )
              ) : (
                <CardsTurno turn={turn} cardType="atendido" key={turn._id}/>
              ),
            )}

            <Col sm={12}>
              <Footer />
            </Col>
          </Row>
        </Container>

        {/* <div className='divPrincipal'> */}
        {/* <Row className='mb-2'> */}
        {/* <p className='titulo mt-4 mx-4'>¿Qué quieres hacer?</p> */}
        {/* <div className='divImagen'> */}
        {/* <Image 
    src='https://i.ibb.co/vs7FLtd/ON3-W8-H1-1.png'
    className='imgHomeFarmacia'
  /> */}
        {/* </div> */}
        {/* <Col sm={12} md={4}>
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
  </Col> */}

        {/* </Row> */}
        {/* </div> */}
        {/* <Footer/> */}
      </div>
    </>
  );
};

export default PageHomeFarmacia;
