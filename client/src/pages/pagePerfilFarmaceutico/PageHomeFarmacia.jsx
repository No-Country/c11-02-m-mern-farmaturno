import NavbarFarmaceutico from '../../components/farmaceutico/navbarFarmacia/NavbarFarmaceutico';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../pagePerfilFarmaceutico/pageHomeFarmacia.css';
import Footer from '../../components/Footer/Footer';
import { useGetTurnsQuery } from '../../redux/turnSlices';
import moment from 'moment';
import CardsTurno from '../../components/farmaceutico/navbarFarmacia/cardsTurno/CardsTurno';

const PageHomeFarmacia = () => {
  const currentDate = moment().format(' D/MM/YYYY');
  const currentTime = moment().format('HH');
  // const turnoTarde = (moment().add(1, 'hours').format('HH'))
  const turnoTardeNumero = parseInt(currentTime);

  const { data, isError, isLoading, error } = useGetTurnsQuery(); //ME PUEDO DVOLVER LA DATA, EL ERROR(TRUE FALSE), PROPIEDAD IS LOADING (TRUEFALSE), ERROR CUAL ES EL ERROR

  if (isLoading) return <div>Loading...</div>;
  else if (isError) return <div>Error:{error}</div>;
  console.log(data);

  return (
    <>
      <div className="homeFarmacia">
        <NavbarFarmaceutico />
        <div className="bodyHomeFarmacia">
          <div className="m-0 p-0 divTituloFarmacia">
            <p className="p-4 align-item-center">Sistema de FarmaTurno</p>
          </div>

          <div className="m-4 p-4 divTexto">
            <h1 className="titulo my-4">Turnos reservados</h1>
            <p className="texto my-4 py-4">
              Gestiona y visualiza los turnos que ya fueron reservados por tus
              clientes, junto a sus datos personales.
            </p>
            <p className="texto mt-4">Fecha de hoy: {currentDate}</p>
            <p className="texto ">Horario de atención: de 7:00 a 19:00</p>
          </div>

          <CardsTurno data={data} turnoTardeNumero={turnoTardeNumero} />

          <Footer />
        </div>
      </div>
    </>
  );
};

export default PageHomeFarmacia;
