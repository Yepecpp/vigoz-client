import React from 'react'
import '../styles/Cmenu.scss'

const Cmenu = () => {
  return (
    <>
        <div className='nav_contenedor'>
            <nav>
                  <ul className='nav_item'>
                    <li className='ul_items'>Dashboard</li>
                    <li className='ul_items'>Nomina</li>
                    <li className='ul_items'>Almacen</li>
                    <li className='ul_items'>Gastos</li>
                    <li className='ul_items'>Distribución</li>
                    <br/>
                    <li className='ul_items'>Perfil</li>
                    <li className='ul_items'>Notificaciones</li>
                    <li className='ul_items'>Configuraciones</li>
                    <li className='ul_items'>Salir</li>
                  </ul>
            </nav>
        </div>
    </>
  )
}

export default Cmenu