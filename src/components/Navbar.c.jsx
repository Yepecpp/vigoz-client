import React from "react";
import { Link } from "react-router-dom";
import { FaHouseUser, FaOutdent, FaBoxes, FaRegListAlt, FaTruck, FaUserAlt, FaRegBell, FaSlidersH, FaWindowClose } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
    <div className="contenedor_logo">
    <h1 className="logo">Hielo Vigoz</h1>
    </div>
    <nav className="navbar">
      <ul className="nav_ul">
        <li className="nav_ul_item"><FaHouseUser/><Link className="li_a" to="/">Dashboard</Link></li>
        <li className="nav_ul_item"><FaOutdent/><Link className="li_a" to="/Nomina">Nomina</Link></li>
        <li className="nav_ul_item"><FaBoxes/><Link className="li_a" to="/Almacen">Almacen</Link></li>
        <li className="nav_ul_item"><FaRegListAlt/><Link className="li_a" to="/Gastos">Gastos</Link></li>
        <li className="nav_ul_item"><FaTruck/><Link className="li_a" to="/Distribucion">Distribución</Link></li>
        <hr />
        <li className="nav_ul_item"><FaUserAlt/><Link className="li_a" to="/Perfil">Perfil</Link></li>
        <li className="nav_ul_item"><FaRegBell/><Link className="li_a" to="/Notificaciones">Notificaciones</Link></li>
        <li className="nav_ul_item"><FaSlidersH/><Link className="li_a" to="/Configuraciones">Configuraciones</Link></li>
        <li className="nav_ul_item"><FaWindowClose/><Link className="li_a" to="/Salir">Salir</Link></li>
      </ul>
    </nav>
    </>
  );
};

export default Navbar;
