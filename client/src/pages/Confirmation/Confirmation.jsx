import React from 'react'
import './Confirmation.css'
import { Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Confirmation = () => {
  return (
    <div>
        <div class="container text-center">
  <div class="row">
    <div class="col mb-5">
    <i class="bi bi-check-circle-fill"></i>
    </div>
    <div className="row">
        <div className="col">
            <p>
            <b>¡Listo, su turno ha sido confirmado!</b>
            </p>
            <p>
            <b>Tu número es el M896</b>
            </p><br/>
            <p>
            Ya tienes disponible tu número de turno para recibir<br/>
            atención en la farmacia. Te enviaremos un mensaje<br/>
            de texto para que puedas verificar tus datos. 
            </p>
            <p>
            Recuerda que puedes dar de baja tu turno desde la<br/>sección de <b>“Consulta tu turno”.</b> 
            </p><br/><br/>
            <p>
            ¡Muchas gracias por elegirnos!
            </p>
        </div>
    </div>
    
  </div>
</div>
       <div className='text-center p-4'>

            <Button>Consultar Turno</Button>
            <Link to='/'>
                 <Button>Volver al inicio</Button>            
            </Link>

       </div>
      

    </div>
  )
}
