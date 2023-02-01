import { useAuthContext } from '../contexts/Auth';
import { Link } from 'react-router-dom';
import { HiArchiveBoxArrowDown } from 'react-icons/hi2';
import { Switch } from '@mui/material';
import { IoMdExit } from 'react-icons/io';
import { useState } from 'react';
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
  const [auth] = useAuthContext();
  const [checked, setChecked] = useState(false);
  const [nameclass, setNameclass] = useState('');

  const handleChange = () => {
    if (!checked) {
      setChecked(true);
      setNameclass('');
    } else {
      setChecked(false);
      setNameclass('switchSidebar');
    }
  };

  return (
    <div className="container_allSidebar">
      <Switch
        checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'controlled' }}
      />

      <div className={`${nameclass + 'container_userSidebar'}`}>
        <img src="/media/img.jpg" className="img_userSidebar" />
        <p className="name_userSidebar">{`${auth.data.name} ${auth.data.last_name}`}</p>
      </div>

      <div className={`${nameclass + 'line_sidebar'}`}></div>

      <nav className="container_sidebar">
        <ul className="list_sidebar">
          <li className="item_sidebar">
            <Link className="link_sidebar" to="/Dashboard/">
              <FaHouseUser />
              <p className={`${nameclass + 'itemText_sidebar'}`}>Dashboard</p>
            </Link>
          </li>
          <li className="item_sidebar">
            <Link className="link_sidebar" to="/Dashboard/Nominas">
              <FaOutdent />
              <p className={`${nameclass + 'itemText_sidebar'}`}>Nomina</p>
            </Link>
          </li>
          <li className="item_sidebar">
            <Link className="link_sidebar" to="/Dashboard/Almacenes">
              <HiArchiveBoxArrowDown />
              <p className={`${nameclass + 'itemText_sidebar'}`}>Almacen</p>
            </Link>
          </li>
          <li className="item_sidebar">
            <Link className="link_sidebar" to="/Dashboard/Gastos">
              <FaRegListAlt />
              <p className={`${nameclass + 'itemText_sidebar'}`}>Gastos</p>
            </Link>
          </li>
          <li className="item_sidebar">
            <Link className="link_sidebar" to="/Dashboard/Usuarios">
              <FaUser />
              <p className={`${nameclass + 'itemText_sidebar'}`}>Usuarios</p>
            </Link>
          </li>
          <li className="item_sidebar">
            <Link className="link_sidebar" to="/Dashboard/Distribucion">
              <FaTruck />
              <p className={`${nameclass + 'itemText_sidebar'}`}>
                Distribución
              </p>
            </Link>
          </li>
          <li className="item_sidebar">
            <Link className="link_sidebar" to="/Dashboard/Clientes">
              <FaUserFriends />
              <p className={`${nameclass + 'itemText_sidebar'}`}>Clientes</p>
            </Link>
          </li>
          <li className="item_sidebar">
            <Link className="link_sidebar" to="/Dashboard/Perfil">
              <FaRegUser />
              <p className={`${nameclass + 'itemText_sidebar'}`}>Perfil</p>
            </Link>
          </li>
          <li className="item_sidebar" id="exit_sidebar">
            <Link className="link_sidebar" to="/">
              <IoMdExit />
              <p className={`${nameclass + 'itemText_sidebar'}`}>Salir</p>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
