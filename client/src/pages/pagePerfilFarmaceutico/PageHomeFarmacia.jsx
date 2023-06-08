import NavbarFarmaceutico from '../../components/farmaceutico/navbarFarmacia/NavbarFarmaceutico';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../pagePerfilFarmaceutico/pageHomeFarmacia.css';
import Footer from '../../components/Footer/Footer';
import { useGetTurnsQuery } from '../../redux/turnSlices';
import moment from 'moment';
import CardsTurno from '../../components/farmaceutico/navbarFarmacia/cardsTurno/CardsTurno';
import Tabla from '../../components/farmaceutico/navbarFarmacia/cardsTurno/Tabla';

const PageHomeFarmacia = () => {
  const currentDate = moment().format(' D/MM/YYYY');
  const currentTime = moment().format('HH');
  const turnoTardeNumero = parseInt(currentTime);

  const { data, isError, isLoading, error } = useGetTurnsQuery(); //ME PUEDO DVOLVER LA DATA, EL ERROR(TRUE FALSE), PROPIEDAD IS LOADING (TRUEFALSE), ERROR CUAL ES EL ERROR

  if (isLoading) return <div>Loading...</div>;
  else if (isError) return <div>Error:{error}</div>;
  console.log(data);

  return (
    <>
      <div className="homeFarmacia1">
        <NavbarFarmaceutico />
        <div className="bodyHomeFarmacia1">
          <div className="m-0 p-0 divTituloFarmacia1">
            <p className="p-4 align-item-center">Sistema de FarmaTurno</p>
          </div>

          <div className="m-4 p-4 divTexto1">
            <h1 className="titulo1 my-4">Turnos reservados</h1>
            <p className="texto1 my-4 py-4">
              Gestiona y visualiza los turnos que ya fueron reservados por tus
              clientes, junto a sus datos personales.
            </p>
            <p className="texto1 mt-4"><span className="txNegrita">Fecha de hoy:</span> {currentDate}</p>
            <p className="texto1 "><span className="txNegrita">Horario de atención:</span> de 7:00 a 19:00</p>
          </div>

          <CardsTurno data={data} turnoTardeNumero={turnoTardeNumero} />
          {/* <h1 className='m-4'>Tabla 2</h1>
          <Tabla data={data} turnoTardeNumero={turnoTardeNumero} /> */}

          <Footer />
        </div>
      </div>
    </>
  );
};

export default PageHomeFarmacia;
