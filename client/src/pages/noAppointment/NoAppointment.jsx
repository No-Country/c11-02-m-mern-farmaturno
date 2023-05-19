import React from 'react';
import '../noAppointment/noAppointment.css';
import { Image,Button } from 'react-bootstrap';

const NoAppointment = () => {
    return (
      <div className="container">
        <div className='p-0'>

        <img
          src="https://i.ibb.co/ZKH9Fxh/no-Appointment.png"
          alt="No Appointment"
          className="imgNoAppointment"
          />
          </div>
  
        <div className="textContainer">
          <p className="title">¡Lo sentimos!</p>
          <p className="description">
            En estos momentos no contamos con turnos disponibles. Por favor, espera
            a que la farmacia habilite los turnos e inténtelo de nuevo más tarde.
          </p>
        </div>
        <div className='divBtn'>
            <Button className='BtnVolverInicio'>Volver al inicio</Button>
        </div>
      </div>
    );
  };

export default NoAppointment;
