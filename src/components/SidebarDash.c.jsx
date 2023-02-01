import { useAuthContext } from '../contexts/Auth';
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
  const [auth] = useAuthContext();
  return (
    <div className="container_allSidebar">
      <div className="container_userSidebar">
        <img src="/media/img.jpg" className="img_userSidebar" />
        <p className="name_userSidebar">{`${auth.data.name} ${auth.data.last_name}`}</p>
      </div>

      <div className="line_sidebar"></div>

      <nav className="container_sidebar">
        <ul className="list_sidebar">
          <li className="item_sidebar">
            <Link className="link_sidebar" to="/Dashboard/">
              <FaHouseUser />
              <p className="itemText_sidebar">Dashboard</p>
            </Link>
          </li>
          <li className="item_sidebar">
            <Link className="link_sidebar" to="/Dashboard/Nominas">
              <FaOutdent />
              <p className="itemText_sidebar">Nomina</p>
            </Link>
          </li>
          <li className="item_sidebar">
            <Link className="link_sidebar" to="/Dashboard/Almacenes">
              <HiArchiveBoxArrowDown />
              <p className="itemText_sidebar">Almacen</p>
            </Link>
          </li>
          <li className="item_sidebar">
            <Link className="link_sidebar" to="/Dashboard/Gastos">
              <FaRegListAlt />
              <p className="itemText_sidebar">Gastos</p>
            </Link>
          </li>
          <li className="item_sidebar">
            <Link className="link_sidebar" to="/Dashboard/Usuarios">
              <FaUser />
              <p className="itemText_sidebar">Usuarios</p>
            </Link>
          </li>
          <li className="item_sidebar">
            <Link className="link_sidebar" to="/Dashboard/Distribucion">
              <FaTruck />
              <p className="itemText_sidebar">Distribución</p>
            </Link>
          </li>
          <li className="item_sidebar">
            <Link className="link_sidebar" to="/Dashboard/Clientes">
              <FaUserFriends />
              <p className="itemText_sidebar">Clientes</p>
            </Link>
          </li>
          <li className="item_sidebar">
            <Link className="link_sidebar" to="/Dashboard/Perfil">
              <FaRegUser />
              <p className="itemText_sidebar">Perfil</p>
            </Link>
          </li>
          <li className="item_sidebar" id="exit_sidebar">
            <Link className="link_sidebar" to="/">
              <IoMdExit />
              <p className="itemText_sidebar">Salir</p>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
