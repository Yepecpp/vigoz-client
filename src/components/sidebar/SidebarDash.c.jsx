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
  FaRegAddressCard,
} from 'react-icons/fa';
import { MdWork, MdAccountBalance, MdAttachMoney } from 'react-icons/md';
import { RiFolderUserFill } from 'react-icons/ri';

const Navbar = () => {
  const [auth] = useAuthContext();
  const [checked, setChecked] = useState(true);
  {
    /*const [sidebar, setSidebar] = useState('dropdown-menu');*/
  }
  const [icon, setIcon] = useState('nav__togglerSidebar toggle');
  const [nameclass, setNameclass] = useState({
    one: 'container_userSidebar',
    two: 'container_allSidebar',
    three: 'list_sidebar',
  });

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

  return (
    <div className={nameclass.two}>
      <div onClick={handleChange} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>

      <div className={nameclass.one}>
        <img
          src={`${import.meta.env.VITE_HOSTAPI}/${auth.data.images?.avatar}`}
          className="img_userSidebar"
        />
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

          {/*<Dropdown
          title={Nomina}
          Icon={<FaOutdent/>}
          childs={Pagos, Empleados}
          />*/}

          <li className="item_sidebar">
            <div className="link_sidebar">
              <FaOutdent />
              <p className={`${nameclass.one}`}>Nominas</p>
            </div>
            <ul className="dropdown">
              <li className="dropdown_item">
                <MdAttachMoney />
                <Link to="/Dashboard/Nominas">Pagos</Link>
              </li>
              <li className="dropdown_item">
                <RiFolderUserFill />
                <Link to="/Dashboard/Empleados">Empleados</Link>
              </li>
            </ul>
          </li>

          <li className="item_sidebar">
            <div className="link_sidebar">
              <HiArchiveBoxArrowDown />
              <p className={`${nameclass.one}`}>Almacen</p>
            </div>
            <ul className="dropdown">
              <li className="dropdown_item">
                <MdAccountBalance />
                <Link to="/Dashboard/Almacenes">Almacenes</Link>
              </li>
              <li className="dropdown_item">
                <MdWork />
                <Link to="/Dashboard/Produccion">Produccion</Link>
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

          {/* <li className="item_sidebar">
            <div className="link_sidebar">
              <FaTruck />
              <p className={`${nameclass.one}`}>Distribución</p>
            </div>
            <ul className="dropdown">
              <li className="dropdown_item">
                <Link to="/Dashboard/Distribucion">Ventas</Link>
              </li>
              <li className="dropdown_item">
                <Link to="/Dashboard/Distribucion">Envios</Link>
              </li>
            </ul>
          </li> */}

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
            <Link className="link_sidebar" to="/Dashboard/Departamento">
              <FaRegAddressCard />
              <p className={nameclass.one}>Departamento</p>
            </Link>
          </li>

          <li className="item_sidebar">
            <Link className="link_sidebar" to="/Dashboard/Perfil">
              <FaRegUser />
              <p className={nameclass.one}>Perfil</p>
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
    </div>
  );
};

export default Navbar;
