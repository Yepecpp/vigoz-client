import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../contexts/Auth';
function Navbar() {
  const [user] = useAuthContext();
  return (
    <header className="index_header">
      <h1 className="index_logo">
        <Link to="/" className="h1_a">
          Hielo Vigoz
        </Link>
      </h1>

      {!user.auth ? (
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
          <Link className="index_li_a" to="/Login">
            <button className="a_button">Login</button>
          </Link>
        </>
      ) : (
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
              <li className="index_nav_ul_li">
                <Link className="index_li_a" to="/Dashboard">
                  Dashboard
                </Link>
              </li>
            </ul>
          </nav>
          <button className="a_button">Log Out</button>
        </>
      )}
    </header>
  );
}

export default Navbar;
