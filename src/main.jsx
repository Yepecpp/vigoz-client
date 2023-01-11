import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
//scss
import './styles/Login.p.scss';
import './styles/Dashboard.p.scss';
import './styles/NoPage.p.scss'
import './styles/Index.p.scss'
import './styles/Perfil.p.scss'
import './styles/Cliente.scss'
import './styles/Almacen.p.scss'
import './styles/Gastos.p.scss'
import './styles/Nomina.p.scss'
import './styles/Register.p.scss'
//scss

const Render = () => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};
Render();
