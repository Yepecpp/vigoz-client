import React from 'react'
import ReactDOM from 'react-dom/client'
//scss
import App from './App'

const Render = () => {
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
)
}
Render();
