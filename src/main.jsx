import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Cmenu from './components/Cmenu'

const Render = () => {
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Cmenu/>
  </React.StrictMode>
)
}
Render();
