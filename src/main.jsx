import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import App from './App';
//scss
import './styles/Login.p.scss';
import './styles/Dashboard.p.scss';
import './styles/NoPage.p.scss';
import './styles/Index.p.scss';
import './styles/Perfil.p.scss';
import './styles/Contacto.p.scss';
import './styles/Cliente.p.scss';
import './styles/Almacen.p.scss';
import './styles/Gastos.p.scss';
import './styles/Nomina.p.scss';
import './styles/Register.p.scss';
import './styles/Popup.scss';
import './styles/Loading.p.scss';
import './styles/Restricted.p.scss';
import './styles/Provedores.p.scss';
import './styles/Usuarios.p.scss';
//scss

const queryClient = new QueryClient();
const Render = () => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </React.StrictMode>
  );
};
Render();
