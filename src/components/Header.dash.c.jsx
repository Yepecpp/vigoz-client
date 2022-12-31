import React from 'react';
import { Link } from 'react-router-dom';
const HeaderDash = () => {
  return (
    <header className="contenedor_logo">
      <h1 className="logo">
        <Link className="logo_a" to="/">
          {' '}
          Hielo Vigoz
        </Link>
      </h1>
    </header>
  );
};

export default HeaderDash;
