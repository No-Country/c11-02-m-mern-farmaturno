import './styles.css'
import { useState } from 'react'
export default function LoginForPharmacyOwner(){
    const [dataPharm,setDataPharm]=useState({
        userName:'',
        userPassword:''
    })
    const handleInputChange = (e) => {
        const { name, value, } = e.target
        setDataPharm({ ...dataPharm, [name]: value })
    }
    const handleSubmitPharm=(e)=>{
        e.preventDefault()
        console.log(dataPharm)
    }
    return(
        <main className="form_allowed_container">
           <div>
            <p>
                te damos la bienvenida a farmaturno gracias por elegirnos
            </p>
           </div>
           <div>
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
                    <label htmlFor="" className='data_title'>Usuario</label>
                        <input type="password" 
                        value={dataPharm.userPassword}
                        name='userPassword'
                        onChange={handleInputChange}
                        className='data_input'/>
                    </div>
                </div>
                <div className='submit_btn'>
                    <button type="submit">Iniciar sesion</button>
                    <p>¿Olvidaste tu contraseña? Contáctanos</p>
                    <p>¿Aun no tienes tu cuenta? Regístrate aquí</p>

                </div>
            </form>
           </div>
        </main>
    )
}