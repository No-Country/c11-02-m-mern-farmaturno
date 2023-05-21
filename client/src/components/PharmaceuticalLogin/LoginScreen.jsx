import './styles.css'
import { useState } from 'react';
import CheckLoginPharm from '../Modals/AlertPharm';
export default function LoginForPharmacyOwner(){
    const [alert,setAlert] = useState(false)
    const [msgAlert,setMsgAlert]= useState('')
    const [dataPharm,setDataPharm]=useState({
        userName:'',
        userPassword:''
    })
    const regexNameUser=/^[a-zA-Z]{6,15}$/
    const handleInputChange = (e) => {
        const { name, value, } = e.target
        setDataPharm({ ...dataPharm, [name]: value })
    }
    const handleSubmitPharm=(e)=>{
        e.preventDefault()
        console.log(dataPharm)
        if(dataPharm.userName === '' || dataPharm.userPassword === ''){
            setMsgAlert('Debe completar todos los campos')
            setAlert(true)
        }else if(!regexNameUser.test(dataPharm.userName)){
            setMsgAlert('Nombre de usuario no valido, solo caracteres alfabeticos')
            setAlert(true)
        }
    }
    return(
        <main className="form_allowed_container">
            {alert && <CheckLoginPharm closeMenu={()=>setAlert(false)} msgToSee={msgAlert}/>}
           <div className='welcome_div'>
            <div className='container_welcome'>
                <p className='set_text'>Te damos la bienvenida a 
                    </p>
                    <p className='title_page'>FarmaTurno
                        </p>
                 <p className='set_text'>
                    ¡Gracias por elegirnos!
                    </p>       
            </div>
           </div>
           <div className='data_div'>
            <form className='req_user_container' onSubmit={handleSubmitPharm}>
                <p className='title_form'>Iincio de sesion</p>
                <div className='data_req_to_send'>
                    <div>
                        <label htmlFor="" className='data_title'>Usuario</label>
                        <input type="text"
                        value={dataPharm.userName}
                        name='userName'
                        onChange={handleInputChange}
                        className='data_input'/>
                    </div>
                    <div>
                    <label htmlFor="" className='data_title'>Contraseña</label>
                        <input type="password" 
                        value={dataPharm.userPassword}
                        name='userPassword'
                        onChange={handleInputChange}
                        className='data_input'/>
                    </div>
                </div>
                <div className='submit_btn'>
                    <button type="submit">Iniciar sesion</button>
                    <p>¿Olvidaste tu contraseña? <p className='alert_reg'>Contáctanos</p></p>
                    <p>¿Aun no tienes tu cuenta? <p className='alert_reg'>Regístrate aquí</p> </p>

                </div>
            </form>
           </div>
        </main>
    )
}