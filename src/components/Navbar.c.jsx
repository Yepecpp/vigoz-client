import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div className="contenedork">
      <Link to="/Login">Login</Link>
      <Link to="/Dashboard">Dashboard</Link>
    </div>
  );
}

export default Navbar;
