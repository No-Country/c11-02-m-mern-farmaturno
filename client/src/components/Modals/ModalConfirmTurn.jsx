import './styleConfirm.css'
export default function ModalToConfirmYourTurn ({closeMenu}){
    return(
        <div className='container_modal_confirm'>
           <article>
           <header className='alert_display'><div className='logo'>G</div>
           <button onClick={closeMenu}>X</button></header>
           <h3 className='message_alert'>Turno confirmado!</h3>
           <div className='data_turn'>
            especificaciones
           </div>
           <div className='describe_data'>
           Ya tienes disponible tu número de turno para recibir atención en la farmacia. 
Te enviaremos una notificación para que puedas verificar tus datos. 
Recuerda que puedes dar de baja el turno solicitado desde la sección de “Consulta tu turno”.
           </div>
           <footer className='btn_container'>
            <button className='check'>Consultar turno</button>
            <button className='came_back'>Volver al inicio</button>
           </footer>
            </article>
        </div>
    )
}