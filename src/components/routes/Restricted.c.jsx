import React from 'react';
import { Link } from 'react-router-dom';

function Restricted() {
  return (
      <section className="semibody_NoAccess">
          <div className="contenedor_NoAccess">
            <h2 className="txt_NoAccess">No tienes permitido entrar a esta pagina</h2>
            <h1 className="NoAccess">Acceso restringido</h1>
            <Link to="/Dashboard" className="a_dash">
              <button className="btn_NoAccess">Vuelve al Dashboard</button>
            </Link>
          </div>
      </section>
    );
}

export default Restricted;
