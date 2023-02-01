import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../contexts/Auth';
import { LogOut } from '../controllers/Auth.controller';

function Navbar() {
  const [auth, Setauth] = useAuthContext();
  const [active, setActive] = useState('nav__menu');
  const [icon, setIcon] = useState('nav__toggler');

  const navToggle = () => {
    if (active === 'nav__menu') {
      setActive('nav__menu nav__active');
    } else setActive('nav__menu');

    // Icon Toggler
    if (icon === 'nav__toggler') {
      setIcon('nav__toggler toggle');
    } else setIcon('nav__toggler');
  };

  const handleClick = () => {
    setActive('nav__menu');
    setIcon('nav__toggler');
    return;
  };

  return (
    <nav className="nav">
      <Link to={'/'} className="nav__brand">
        Hielo Vigoz
      </Link>
      <ul className={active}>
        <li className="nav__item">
          <Link to={'/'} onClick={handleClick} className="nav__link">
            Inicio
          </Link>
        </li>
        <li className="nav__item">
          <Link to={'/About'} onClick={handleClick} className="nav__link">
            Acerca de Nosotros
          </Link>
        </li>
        <li className="nav__item">
          <Link to={'/Contacto'} onClick={handleClick} className="nav__link">
            Contacto
          </Link>
        </li>
        <li className="nav__item">
          <Link to={'/Servicios'} onClick={handleClick} className="nav__link">
            Servicios
          </Link>
        </li>

        {auth?.isAuth ? (
          <>
            <li className="nav__item">
              <Link
                to={'/Login'}
                className="nav__link"
                onClick={() => {
                  LogOut(Setauth);
                  handleClick;
                }}
              >
                Log Out
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to={'/Dashboard'}
                onClick={handleClick}
                className="nav__link"
              >
                Dashboard
              </Link>
            </li>
          </>
        ) : (
          <>
            <li className="nav__item">
              <Link to={'/Login'} onClick={handleClick} className="nav__link">
                Login
              </Link>
            </li>
          </>
        )}
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;
