import React from 'react'
import './farmaciasAdeheridas.css';
import Button from 'react-bootstrap/Button';

const FarmaciaAdicionales = () => {
  return (
    <div className='adheridasFarmacia'>

      <div className='Mainfarmaci'>
        <h2>farmacias y droguerias adheridas</h2>

    

        <div className='FarmaciaBoton'>
          <Button className="signUp" onClick={() => navigate('signUp')}>
            Adherir mi farmacia
          </Button>
        </div>

      </div>
    </div>
  )
}

export default FarmaciaAdicionales