import React from 'react';
import { Link } from 'react-router-dom';
import { HiArchiveBoxArrowDown } from 'react-icons/hi2';
import { IoMdExit } from 'react-icons/io';
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
    <nav className="container_sidebar">
      <ul className="list_sidebar">
        <li className="item_sidebar">
          <Link className="link_sidebar" to="/Dashboard/">
          <FaHouseUser />
            <p className='itemText_sidebar'>Dashboard</p>
          </Link>
        </li>
        <li className="item_sidebar">
          <Link className="link_sidebar" to="/Dashboard/Nominas">
          <FaOutdent />
            <p className='itemText_sidebar'>Nomina</p>
          </Link>
        </li>
        <li className="item_sidebar">
          <Link className="link_sidebar" to="/Dashboard/Almacenes">
          <HiArchiveBoxArrowDown />
            <p className='itemText_sidebar'>Almacen</p>
          </Link>
        </li>
        <li className="item_sidebar">
          <Link className="link_sidebar" to="/Dashboard/Gastos">
          <FaRegListAlt />
            <p className='itemText_sidebar'>Gastos</p>
          </Link>
        </li>
        <li className="item_sidebar">
          <Link className="link_sidebar" to="/Dashboard/Usuarios">
          <FaUser />
            <p className='itemText_sidebar'>Usuarios</p>
          </Link>
        </li>
        <li className="item_sidebar">
          <Link className="link_sidebar" to="/Dashboard/Distribucion">
          <FaTruck />
            <p className='itemText_sidebar'>Distribución</p>
          </Link>
        </li>
        <li className="item_sidebar">
          <Link className="link_sidebar" to="/Dashboard/Clientes">
          <FaUserFriends />
            <p className='itemText_sidebar'>Clientes</p>
          </Link>
        </li>
        <li className="item_sidebar">
          <Link className="link_sidebar" to="/Dashboard/Perfil">
          <FaRegUser />
            <p className='itemText_sidebar'>Perfil</p>
          </Link>
        </li>
        <li className="item_sidebar" id='exit_sidebar'>
          <Link className="link_sidebar" to="/">
          <IoMdExit />
            <p className='itemText_sidebar'>Salir</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
