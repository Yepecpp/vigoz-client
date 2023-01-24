import React from 'react';
import { Link } from 'react-router-dom';
import { HiArchiveBoxArrowDown } from 'react-icons/hi2';

import {
  FaHouseUser,
  FaOutdent,
  FaRegListAlt,
  FaUserFriends,
  FaRegUser,
  FaUser,
  FaTruck,
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
          <Link className="sidebar_ul_li_a" to="/Dashboard/Nominas">
            Nomina
          </Link>
        </li>
        <li className="sidebar_ul_item">
          <HiArchiveBoxArrowDown />
          <Link className="sidebar_ul_li_a" to="/Dashboard/Almacenes">
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
          <FaUser />
          <Link className="sidebar_ul_li_a" to="/Dashboard/Usuarios">
            Usuarios
          </Link>
        </li>
        <li className="sidebar_ul_item">
          <FaTruck />
          <Link className="sidebar_ul_li_a" to="/Dashboard/Distribucion">
            Distribución
          </Link>
        </li>
        <li className="sidebar_ul_item">
          <FaUserFriends />
          <Link className="sidebar_ul_li_a" to="/Dashboard/Clientes">
            Clientes
          </Link>
        </li>
        <hr />
        <li className="sidebar_ul_item">
          <FaRegUser />
          <Link className="sidebar_ul_li_a" to="/Dashboard/Perfil">
            Perfil
          </Link>
        </li>
        <li className="sidebar_ul_item buttonli">
          <button className="sidebar_ul_li_button">
            <Link className="sidebar_ul_li_a" to="/">
              Salir
            </Link>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
