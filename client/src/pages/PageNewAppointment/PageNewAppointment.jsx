import FormUser from '../../components/formUser/FormUser';
import moment from 'moment';
import '../PageNewAppointment/PageNewAppointment.css'

const PageNuevoTurno = () => {
  const currentDate = moment().format(' D/MM/YYYY');

  return (
    <div className='general'>
      <div>
       <h1>Pide tu turno</h1>
      <h2>
        Recuerda que estas reservando un turno para el dia de hoy {currentDate}
      </h2>
      </div>
    <div className='body'>
     <img className='img' src="https://i.ibb.co/VJwHCqN/pana.png" alt="pana" border="0" />
      <FormUser />
    </div>
    </div>
  );
};

export default PageNuevoTurno;
