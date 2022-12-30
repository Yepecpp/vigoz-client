import React from 'react';
import ReactDOM from 'react-dom/client';
//scss
import App from './App';
//scss
import './styles/Login.scss';
import './styles/FooterDash.scss';
import './styles/Letters.scss';
import './styles/NavbarDash.scss';

const Render = () => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};
Render();
