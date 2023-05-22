import './divider.css';
const Divider = () => {
  return <div className="divider">
    <div className="column-left">
      <h1>Una aplicación web para gestionar turnos</h1>
      <div className="section_parrafo">
        <p>Solicitar un turnos en las farmacia de nuestro país, puede ser agotador, y muchas veces implica una gran pérdida de tiempo.</p>
        <span>  
        Decidimos darle una solucuion a esta problemática diaria, pensando en las personas y sus necesidades.</span>
        
        <h2>Creamos FarmaTurno, Un turnero online diario, para que evites largas filas de espera.</h2>
      </div>
    </div>
    <div className="column-right">
      <img src="/Imagen.svg" alt="Computer" />
    </div>
  </div>
};

export default Divider;
