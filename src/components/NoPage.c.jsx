import React from 'react';
import { Link } from 'react-router-dom';

function NoPage() {
  return (
    <section className="semibody">
      <div className="contenedor_404">
        <h2 className="notfound">Pagina no encontrada</h2>
        <h1 className="p404">404</h1>
        <p className="texto_404">
          No podemos encontrar la pagina que estas buscando
        </p>
        <Link to="/" className="rac">
          <button className="btn_rac">Regresa al inicio</button>
        </Link>
      </div>
    </section>
  );
}

export default NoPage;
