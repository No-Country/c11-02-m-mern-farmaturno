import FormUser from '../../components/formUser/FormUser';
import moment from 'moment';

const PageNuevoTurno = () => {
  const currentDate = moment().format(' D/MM/YYYY');

  return (
    <div className='general'>
      <div>
      <h1>Pide tu turno</h1>
      <h2>
        Recuerda que estas reservando un turno para el dia de hoy {currentDate}
      </h2>
      <img src="https://i.ibb.co/VJwHCqN/pana.png" alt="pana" border="0" />
      </div>
      <FormUser />
    </div>
  );
};

export default PageNuevoTurno;
