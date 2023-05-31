import './divider.css';
const Divider = () => {
  return <div className="divider">
    <div className="column-left">
      <h1>Una aplicación web para gestionar turnos</h1>
      <div className="section_parrafo">
        <p>Solicitar turnos en las farmacias de nuestro país, puede ser agotador, y muchas veces implica una gran pérdida de tiempo.</p>
        <p>  
        Decidimos darle una solucion a esta problemática diaria, pensando en las personas y sus necesidades.</p>
        
      </div>
    </div>
    <div className="column-right">
      <img src="/Imagen.svg" alt="Computer" />
    </div>
        <h2>Creamos FarmaTurno, Un turnero online diario, para que evites largas filas de espera.</h2>
  </div>
};

export default Divider;
