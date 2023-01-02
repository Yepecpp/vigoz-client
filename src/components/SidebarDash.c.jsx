import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaHouseUser,
  FaOutdent,
  FaBoxes,
  FaRegListAlt,
  FaTruck,
  FaUserAlt,
} from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="sidebar">
      <ul className="sidebar_ul">
        <li className="sidebar_ul_item">
          <FaHouseUser />
          <Link className="sidebar_ul_li_a" to="/Dashboard/">
            Dashboard
          </Link>
        </li>
        <li className="sidebar_ul_item">
          <FaOutdent />
          <Link className="sidebar_ul_li_a" to="/Dashboard/Nomina">
            Nomina
          </Link>
        </li>
        <li className="sidebar_ul_item">
          <FaBoxes />
          <Link className="sidebar_ul_li_a" to="/Dashboard/Almacen">
            Almacen
          </Link>
        </li>
        <li className="sidebar_ul_item">
          <FaRegListAlt />
          <Link className="sidebar_ul_li_a" to="/Dashboard/Gastos">
            Gastos
          </Link>
        </li>
        <li className="sidebar_ul_item">
          <FaTruck />
          <Link className="sidebar_ul_li_a" to="/Dashboard/Distribucion">
            Distribución
          </Link>
        </li>
        <hr />
        <li className="sidebar_ul_item buttonli">
          <button className="sidebar_ul_li_button">
            Salir
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
