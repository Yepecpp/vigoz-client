import React from 'react'
import ReactDOM from 'react-dom/client'
//scss
import navbar from './styles/NavbarDash.scss'
import footer from './styles/FooterDash.scss'
import App from './App'

const Render = () => {
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
)
}
Render();
