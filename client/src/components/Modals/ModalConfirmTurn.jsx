import './styleConfirm.css';
import logo from '../../images/success.png';
import { useNavigate } from 'react-router-dom';
export default function ModalToConfirmYourTurn ({closeMenu}){
    const navigate=useNavigate()
    return(
        <div className='container_modal_confirm'>
           <article>
           <header className='alert_display'><div className='logo'>
            <img src={logo} className='icon_alert' alt='icono de logrado' />
           </div>
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
            <button className='came_back' onClick={()=>navigate('/')}>Volver al inicio</button>
           </footer>
            </article>
        </div>
    )
}