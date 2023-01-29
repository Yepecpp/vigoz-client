import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useAuthContext } from '../contexts/Auth';
import { LogOut } from '../controllers/Auth.controller';
import { VscThreeBars } from 'react-icons/vsc';

function Navbar() {
  const [auth, Setauth] = useAuthContext();
  let [iscell, setIscell] = useState(false);

  const handleCell = () => {
    console.log(iscell);
    if (iscell === false) {
      document.querySelector('.bars_media2').style.display = 'flex';
      document.querySelector('.container_navbar_media').style.display = 'none';
      setIscell(true);
      return;
    } else {
      document.querySelector('.bars_media2').style.display = 'none';
      document.querySelector('.container_navbar_media').style.display = 'flex';
      setIscell(false);
      return;
    }
  };

  const handleChange = () => {
    document.querySelector('.container_navbar_media').style.display = 'none';
    document.querySelector('.bars_media2').style.display = 'flex';
  };

  return (
    <>
      <header className="container_navbar_media">
        <div className="navbar_bars_media">
          <VscThreeBars
            className="navbar_bars"
            onClick={() => setIscell(handleCell)}
          />
        </div>

        <Link to="/" className="link_logo_media" onClick={handleChange}>
          <p className="navbar_logo_media">Hielo Vigoz</p>
        </Link>

        <ul className="navbar_buttons_media">
          <li className="navbar_button_media">
            <Link
              className="link_buttons_media"
              to="/About"
              onClick={handleChange}
            >
              Sobre Nosotros
            </Link>
          </li>
          <li className="navbar_button_media">
            <Link
              className="link_buttons_media"
              to="/Contacto"
              onClick={handleChange}
            >
              Contacto
            </Link>
          </li>
          <li className="navbar_button_media">
            <Link
              className="link_buttons_media"
              to="/Servicios"
              onClick={handleChange}
            >
              Servicios
            </Link>
          </li>
        </ul>

        <div className="navbar_islogout_media">
          {auth?.isAuth ? (
            <>
              <Link
                className="link_buttons_media"
                to="/Login"
                onClick={handleChange}
              >
                <button
                  className="a_button_media"
                  onClick={() => {
                    LogOut(Setauth);
                  }}
                >
                  <p>Log Out</p>
                </button>
              </Link>
              <Link
                className="link_buttons_media"
                to="/Dashboard"
                onClick={handleChange}
              >
                <button className="a_button_media">
                  <p>Dashboard</p>
                </button>
              </Link>
            </>
          ) : (
            <Link
              className="link_buttons_media"
              to="/Login"
              onClick={handleChange}
            >
              <button className="a_button_media">
                <p>Login</p>
              </button>
            </Link>
          )}
        </div>
      </header>

      <header className="container_navbar">
        <Link to="/" className="link_logo">
          <p className="navbar_logo">Hielo Vigoz</p>
        </Link>

        <div className="navbar_bars_media bars_media2">
          <VscThreeBars
            className="navbar_bars"
            onClick={() => setIscell(handleCell)}
          />
        </div>

        <ul className="navbar_buttons">
          <li className="navbar_button">
            <Link className="link_buttons lb_list" to="/About">
              Sobre Nosotros
            </Link>
          </li>
          <li className="navbar_button">
            <Link className="link_buttons lb_list" to="/Contacto">
              Contacto
            </Link>
          </li>
          <li className="navbar_button">
            <Link className="link_buttons lb_list" to="/Servicios">
              Servicios
            </Link>
          </li>
        </ul>

        <div className="navbar_islogout">
          {auth?.isAuth ? (
            <>
              <Link className="link_buttons" to="/Login">
                <button
                  className="a_button"
                  onClick={() => {
                    LogOut(Setauth);
                  }}
                >
                  <p>Log Out</p>
                </button>
              </Link>
              <Link className="link_buttons" to="/Dashboard">
                <button className="a_button">
                  <p>Dashboard</p>
                </button>
              </Link>
            </>
          ) : (
            <Link className="link_buttons" to="/Login">
              <button className="a_button">
                <p>Login</p>
              </button>
            </Link>
          )}
        </div>
      </header>
    </>
  );
}

export default Navbar;
