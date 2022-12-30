import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <nav className="contenedork">
      <Link to="/Login">Login</Link>
      <Link to="/Dashboard">Dashboard</Link>
    </nav>
  );
}

export default Navbar;
