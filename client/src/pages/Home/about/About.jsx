import './about.css';
const About = () => {
  return <div className="about">
    <div className='column'>
      <img src="/list.svg" alt="" />
      <h2>Practicidad para farmacias</h2>
      <p>Con FarmaTurno podrás evitar que tus clientes
        formen largas filas afuera de tu farmacia para obtener un turno.
        Lograrás una atención organizada, personalizada y empática, marcando
        un diferencial.
        <br />
        <p className='span_title'>
        Con un rápido y ágil registro, formarás parte de este nuevo sistema de
        gestion de turnos para farmacias.
        </p>

      </p>
    </div>

    <div className='column'>
      <img src="/turn.svg" alt="" />
      <h2>Rapidez para clientes</h2>
      <p>
        Conocemos la problemática que implican las largas filas de espera para obtener un turno en la farmacia, y nos comprometemos en brindas una solución.
        <br />
        <p className='span_title'>
        Podrás pedir un turno cuando quieras, sin importar dónde estés. Unos pocos datos serán necesarios para hacer tu reserva.</p>
      </p>
    </div>

  </div>;
};

export default About;
