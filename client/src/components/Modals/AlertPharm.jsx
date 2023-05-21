import './styles.css'
export default function CheckLoginPharm({closeMenu,msgToSee}){
    return(
        <div className='modal_container'>
           <article>
            <header className='alert_name'>Tipo de alerta</header>
          <p className='body_info'>
             {msgToSee}
            </p> 
            <button onClick={closeMenu} className='close_btn'>
                Cerrar
            </button>
            </article>
        </div>
    )
}