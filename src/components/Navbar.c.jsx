import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../contexts/Auth';
import { LogOut } from '../controllers/Auth.controller';
function Navbar() {
  const [auth, Setauth] = useAuthContext();
  return (
    <header className="index_header">
      <h1 className="index_logo">
        <Link to="/" className="h1_a">
          Hielo Vigoz
        </Link>
      </h1>
      <>
        <nav className="index_nav">
          <ul className="index_nav_ul">
            <li className="index_nav_ul_li">
              <Link className="index_li_a" to="/About">
                Sobre nosotros
              </Link>
            </li>
            <li className="index_nav_ul_li">
              <Link className="index_li_a" to="/Contacto">
                Contacto
              </Link>
            </li>
            <li className="index_nav_ul_li">
              <Link className="index_li_a" to="/Servicios">
                Servicios
              </Link>
            </li>
          </ul>
        </nav>
        {auth?.isAuth ? (
          <>
            <h1>Bienvenido: {auth.data.name}</h1>
            <button
              className="a_button"
              onClick={() => {
                LogOut(Setauth);
              }}
            >
              Log Out
            </button>
            <Link className="index_li_a" to="/Dashboard">
              <button className="a_button">Dashboard</button>
            </Link>
          </>
        ) : (
          <Link className="index_li_a" to="/Login">
            <button className="a_button">Login</button>
          </Link>
        )}
      </>
    </header>
  );
}

export default Navbar;
