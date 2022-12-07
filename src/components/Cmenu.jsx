import React from 'react'
import '../styles/Cmenu.scss'

const Cmenu = () => {
  return (
    <>
        <div className='contenedor'>
            <nav>
                  <ul>
                    <li>Dashboard</li>
                    <li>Nomina</li>
                    <li>Almacen</li>
                    <li>Gastos</li>
                    <li>Distribución</li>
                    <br />
                    <li>Perfil</li>
                    <li>Notificaciones</li>
                    <li>Configuraciones</li>
                    <li>Salir</li>
                  </ul>
            </nav>
        </div>
    </>
  )
}

export default Cmenu