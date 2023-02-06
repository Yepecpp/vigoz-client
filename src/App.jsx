import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RequireAuth from './components/routes/RequireAuth.c';
import Dashboard from './pages/Dashboard.p';
import IndexdashP from './pages/dashpages/Index.dash';
import Home from './pages/Home.p';
import ContactoP from './pages/indexpages/Contacto.p';
import NoPageP from './pages/No.p';
import LoginP from './pages/Login.p';
import IndexP from './pages/indexpages/Index.p';
import PerfilP from './pages/dashpages/Perfil.dash';
import AboutP from './pages/indexpages/About.p';
import ClientesP from './pages/dashpages/Cliente.dash';
import { AuthProvider } from './contexts/Auth';
import AlmacenP from './pages/dashpages/Almacen.dash';
import GastosP from './pages/dashpages/Gastos.dash';
import NominaP from './pages/dashpages/Nomina.dash';
import RegisterP from './pages/dashpages/Usuarios.p';
import DistributionP from './pages/dashpages/Distribution.dash';
import ProvedoresP from './pages/dashpages/Provedores.dash';
import UsuariosP from './pages/dashpages/Usuarios.p';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Layout */}
          {/* Public Pages */}
          <Route path="/" element={<Home Comp={IndexP} />} />
          <Route path="About" element={<Home Comp={AboutP} />} />
          <Route path="Contacto" element={<Home Comp={ContactoP} />} />
          <Route path="Login" element={<Home Comp={LoginP} />} />
          <Route path="Register" element={<Home Comp={RegisterP} />} />
          {/* Private Pages */}
          <Route element={<RequireAuth />}>
            <Route path="Dashboard" element={<Dashboard Comp={IndexdashP} />} />
            <Route
              path="Dashboard/Nominas"
              element={<Dashboard Comp={NominaP} />}
            />
              <Route
                path="Dashboard/Almacenes"
                element={<Dashboard Comp={AlmacenP} />}
              />
              <Route
                path="Dashboard/Gastos"
                element={<Dashboard Comp={GastosP} />}
              />
              <Route
                path="Dashboard/Usuarios"
                element={<Dashboard Comp={UsuariosP} />}
              />
              <Route
                path="/Dashboard/Distribucion"
                element={<Dashboard Comp={DistributionP} />}
              />
              <Route
                path="/Dashboard/Provedores"
                element={<Dashboard Comp={ProvedoresP} />}
              />
              <Route
                path="Dashboard/Clientes"
                element={<Dashboard Comp={ClientesP} />}
                />
            <Route
              path="Dashboard/Perfil"
              element={<Dashboard Comp={PerfilP} />}
            />
          </Route>
          {/* Catch all route, must be last */}
          <Route path="*" element={<Home Comp={NoPageP} />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
