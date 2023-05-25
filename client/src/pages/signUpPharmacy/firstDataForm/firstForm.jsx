import './style.css'
export default function FistFormToComplete({changeMenu}){
    return(
        <form className="fist_form" action="">
           <p>Datos del encargado/responsable</p>
           <div className='data_to_send'>
            <label htmlFor="">Nombre</label>
            <input type="text"  />
           </div>
           <div className='data_to_send'>
           <label htmlFor="">Nombre</label>
            <input type="text"  />
           </div>
           <div className='data_to_send'>
           <label htmlFor="">Nombre</label>
            <input type="text"  />
           </div>
           <button className='send_info' onClick={changeMenu}>enviar</button>
        </form>
    )
}