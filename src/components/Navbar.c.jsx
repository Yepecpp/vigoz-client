import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="index_header">
      <h1 className="index_logo"><Link to="/" className="h1_a">Hielo Vigoz</Link></h1>
      <nav className="index_nav">
        <ul className="index_nav_ul">
          <li className="index_nav_ul_li"><Link className="index_li_a" to="/Sobre-nosotros">Sobre nosotros</Link></li>
          <li className="index_nav_ul_li"><Link className="index_li_a" to="/Servicios">Servicios</Link></li>
          <li className="index_nav_ul_li"><Link className="index_li_a" to="/dalepatramiloco">noseqponer</Link></li>
        </ul>
      </nav>
      <Link className="index_li_a" to="/Login"><button className="a_button">Login</button></Link>
    </header>
  );
}

export default Navbar;
