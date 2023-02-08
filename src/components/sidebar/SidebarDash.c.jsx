import { useAuthContext } from '../../contexts/Auth';
import { Link } from 'react-router-dom';
import { HiArchiveBoxArrowDown } from 'react-icons/hi2';
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
import { GrUserWorker } from 'react-icons/gr';
import { styled } from '@mui/material/styles';

const ResponsiveSide = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    color: 'blue',
  },
}));

const Navbar = () => {
  const [auth] = useAuthContext();
  const [checked, setChecked] = useState(true);
  const [sidebar, setSidebar] = useState('dropdown-menu');
  const [icon, setIcon] = useState('nav__togglerSidebar toggle');
  const [nameclass, setNameclass] = useState({
    one: 'container_userSidebar',
    two: 'container_allSidebar',
    three: 'list_sidebar',
  });

  const handleSidebar = () => {
    if (sidebar === 'dropdown-menu') {
      setSidebar('dropdown-menu dropdown-menuActive');
    } else {
      setSidebar('dropdown-menu');
    }
  };

  const handleChange = () => {
    const nameClases = [
      'container_userSidebar',
      'container_allSidebar',
      'list_sidebar',
    ];
    let NameClasses = nameclass;
    if (checked) {
      setChecked(false);
      setIcon('nav__togglerSidebar');
      NameClasses.one = 'switchSidebar container_userSidebar';
      NameClasses.two = 'switch_container_allSidebar container_allSidebar';
      NameClasses.three = 'switch_list_sidebar list_sidebar';
    } else {
      setChecked(true);
      NameClasses.one = nameClases[0];
      NameClasses.two = nameClases[1];
      NameClasses.three = nameClases[2];
      setIcon('nav__togglerSidebar toggle');
    }
    setNameclass(NameClasses);
  };

  //return <span>{`theme.breakpoints.up('sm') matches: ${matches}`}</span>;

  return (
    <ResponsiveSide className={nameclass.two}>
      <div onClick={handleChange} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>

      <div className={nameclass.one}>
        <img src="/media/user.png" className="img_userSidebar" />
        <p className="name_userSidebar">{`${auth.data.name} ${auth.data.last_name}`}</p>
      </div>
      <div className={nameclass.one}></div>
      <nav className="container_sidebar">
        <ul className={nameclass.three}>
          <li className="item_sidebar">
            <Link className="link_sidebar" to="/Dashboard/">
              <FaHouseUser />
              <p className={nameclass.one}>Dashboard</p>
            </Link>
          </li>
          <li className="item_sidebar">
            <Link className="link_sidebar" to="/Dashboard/Nominas">
              <FaOutdent />
              <p className={`${nameclass.one}`}>Nomina</p>
            </Link>
          </li>
          <li className="item_sidebar">
            <div className="link_sidebar" onClick={handleSidebar}>
              <HiArchiveBoxArrowDown />
              <p className={`${nameclass.one}`}>Almacen</p>
            </div>
            <ul className={sidebar}>
              <li>
                <Link to="/Dashboard/Almacenes">Almacen 1</Link>
              </li>
              <li>
                <Link to="/Dashboard/Almacenes">Almacen 2</Link>
              </li>
            </ul>
          </li>
          <li className="item_sidebar">
            <Link className="link_sidebar" to="/Dashboard/Gastos">
              <FaRegListAlt />
              <p className={`${nameclass.one}`}>Gastos</p>
            </Link>
          </li>
          <li className="item_sidebar">
            <Link className="link_sidebar" to="/Dashboard/Usuarios">
              <FaUser />
              <p className={`${nameclass.one}`}>Usuarios</p>
            </Link>
          </li>
          <li className="item_sidebar">
            <div className="link_sidebar" onClick={handleSidebar}>
              <FaTruck />
              <p className={`${nameclass.one}`}>Distribución</p>
            </div>
            <ul className={sidebar}>
              <li>
                <Link to="/Dashboard/Distribucion">Distribucion 1</Link>
              </li>
              <li>
                <Link to="/Dashboard/Distribucion">Distribucion 2</Link>
              </li>
            </ul>
          </li>
          <li className="item_sidebar">
            <Link className="link_sidebar" to="/Dashboard/Provedores">
              <TbClipboardText />
              <p className={nameclass.one}>Provedores</p>
            </Link>
          </li>
          <li className="item_sidebar">
            <Link className="link_sidebar" to="/Dashboard/Clientes">
              <FaUserFriends />
              <p className={nameclass.one}>Clientes</p>
            </Link>
          </li>
          <li className="item_sidebar">
            <Link className="link_sidebar" to="/Dashboard/Perfil">
              <FaRegUser />
              <p className={nameclass.one}>Perfil</p>
            </Link>
          </li>
          <li className="item_sidebar">
            <Link className="link_sidebar" to="/Dashboard/Empleados">
              <GrUserWorker />
              <p className={nameclass.one}>Empleados</p>
            </Link>
          </li>
          <li className="item_sidebar" id="exit_sidebar">
            <Link className="link_sidebar" to="/">
              <IoMdExit />
              <p className={nameclass.one}>Salir</p>
            </Link>
          </li>
        </ul>
      </nav>
    </ResponsiveSide>
  );
};

export default Navbar;
