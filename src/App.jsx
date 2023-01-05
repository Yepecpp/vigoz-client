import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard.p';
import Indexdash from './pages/dashpages/Index.dash';
import Home from './pages/Home.p';
import NoPage from './pages/No.p';
import Login from './pages/Login.p';
import Index from './pages/indexpages/Index.p';
import Perfil from './pages/dashpages/Perfil.dash';
import About from './pages/indexpages/About.p';
import { AuthProvider } from './contexts/Auth';


const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home Comp={Index} />} />
          <Route path="/About" element={<Home Comp={About}/>}/>
          <Route path="/Login" element={<Home Comp={Login} />} />
          <Route path="/Dashboard" element={<Dashboard Comp={Indexdash} />} />
          <Route
            path="/Dashboard/Perfil"
            element={<Dashboard Comp={Perfil} />}
          />
          <Route path="*" element={<Home Comp={NoPage} />} />
          
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
