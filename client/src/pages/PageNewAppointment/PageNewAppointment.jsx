import FormUser from '../../components/formUser/FormUser';
import moment from 'moment';
import '../PageNewAppointment/PageNewAppointment.css'

const PageNuevoTurno = () => {
  const currentDate = moment().format(' D/MM/YYYY');

  return (
    <div className='general'>
      <div className='margin'>
      <a href='/'><img src="https://i.ibb.co/T0psFH9/arrow-left-circle-fillback.png" alt="arrow-left-circle-fillback" border="0"/></a>
      </div>
      <div className='margin'>
      <div>
       <h1 className='titulo'>Pide tu turno</h1>
      <p className='texto'>
        Recuerda que estas reservando un turno para el dia de hoy {currentDate}
      </p>
      </div>
    <div className='body'>
     <img className='img' src="https://i.ibb.co/VJwHCqN/pana.png" alt="pana" border="0" />
      <FormUser />
    </div>
    </div>
    </div>
  );
};

export default PageNuevoTurno;
