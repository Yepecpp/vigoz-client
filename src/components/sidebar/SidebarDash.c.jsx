import { useAuthContext } from '../../contexts/Auth';
import { Link } from 'react-router-dom';
import { HiArchiveBoxArrowDown } from 'react-icons/hi2';
import { Switch } from '@mui/material';
import { IoMdExit } from 'react-icons/io';
import { TbClipboardText } from 'react-icons/tb';
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
  const [checked, setChecked] = useState(true);
  const [nameclass, setNameclass] = useState('container_userSidebar');
  const [nameclassTwo, setNameclassTwo] = useState('container_allSidebar');
  const [nameclassThree, setNameclassThree] = useState('list_sidebar');

  const handleChange = () => {
    if (checked) {
      setChecked(false);
      setNameclass('container_userSidebar switchSidebar');
    } else {
      setChecked(true);
      setNameclass('container_userSidebar');
    }

    if (checked) {
      setNameclassTwo('switch_container_allSidebar container_allSidebar');
    } else {
      setNameclassTwo('container_allSidebar');
    }

    if (checked) {
      setNameclassThree('list_sidebar switch_list_sidebar');
    } else {
      setNameclassThree('list_sidebar');
    }
  };

  return (
    <div className={`${nameclassTwo}`}>
      <Switch
        checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'controlled' }}
      />

      <div className={`${nameclass}`}>
        <img src="/media/user.png" className="img_userSidebar" />
        <p className="name_userSidebar">{`${auth.data.name} ${auth.data.last_name}`}</p>
      </div>

      <div className={`${nameclass}`}></div>

      <nav className="container_sidebar">
        <ul className={`${nameclassThree}`}>
          <li className="item_sidebar">
            <Link className="link_sidebar" to="/Dashboard/">
              <FaHouseUser />
              <p className={`${nameclass}`}>Dashboard</p>
            </Link>
          </li>
          <li className="item_sidebar">
            <Link className="link_sidebar" to="/Dashboard/Nominas">
              <FaOutdent />
              <p className={`${nameclass}`}>Nomina</p>
            </Link>
          </li>
          <li className="item_sidebar">
            <Link className="link_sidebar" to="/Dashboard/Almacenes">
              <HiArchiveBoxArrowDown />
              <p className={`${nameclass}`}>Almacen</p>
            </Link>
          </li>
          <li className="item_sidebar">
            <Link className="link_sidebar" to="/Dashboard/Gastos">
              <FaRegListAlt />
              <p className={`${nameclass}`}>Gastos</p>
            </Link>
          </li>
          <li className="item_sidebar">
            <Link className="link_sidebar" to="/Dashboard/Usuarios">
              <FaUser />
              <p className={`${nameclass}`}>Usuarios</p>
            </Link>
          </li>
          <li className="item_sidebar">
            <Link className="link_sidebar" to="/Dashboard/Distribucion">
              <FaTruck />
              <p className={`${nameclass}`}>Distribución</p>
            </Link>
          </li>
          <li className="item_sidebar">
            <Link className="link_sidebar" to="/Dashboard/Provedores">
              <TbClipboardText />
              <p className={`${nameclass + 'itemText_sidebar'}`}>
                Provedores
              </p>
            </Link>
          </li>
          <li className="item_sidebar">
            <Link className="link_sidebar" to="/Dashboard/Clientes">
              <FaUserFriends />
              <p className={`${nameclass}`}>Clientes</p>
            </Link>
          </li>
          <li className="item_sidebar">
            <Link className="link_sidebar" to="/Dashboard/Perfil">
              <FaRegUser />
              <p className={`${nameclass}`}>Perfil</p>
            </Link>
          </li>
          <li className="item_sidebar" id="exit_sidebar">
            <Link className="link_sidebar" to="/">
              <IoMdExit />
              <p className={`${nameclass}`}>Salir</p>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
