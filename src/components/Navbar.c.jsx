import React from "react";
import { Link } from "react-router-dom";
const Cmenu = () => {
  return (
    <nav className="nav_contenedor">
      <ul className="nav_item">
        <li className="ul_items"><Link to="/">Index</Link></li>
        <li className="ul_items">Nomina</li>
        <li className="ul_items">Almacen</li>
        <li className="ul_items">Gastos</li>
        <li className="ul_items">Distribución</li>
        <br />
        <li className="ul_items"><Link to="/Login">Log-in</Link></li>
        <li className="ul_items">Perfil</li>
        <li className="ul_items">Notificaciones</li>
        <li className="ul_items">Configuraciones</li>
        <li className="ul_items">Salir</li>
      </ul>
    </nav>
  );
};

export default Cmenu;
