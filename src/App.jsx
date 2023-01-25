import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RequireAuth from './components/routes/RequireAuth.c';
import Dashboard from './pages/Dashboard.p';
import Indexdash from './pages/dashpages/Index.dash';
import Home from './pages/Home.p';
import NoPage from './pages/No.p';
import Login from './pages/Login.p';
import Index from './pages/indexpages/Index.p';
import Perfil from './pages/dashpages/Perfil.dash';
import About from './pages/indexpages/About.p';
import Clientedash from './pages/dashpages/Cliente.dash';
import { AuthProvider } from './contexts/Auth';
import Almacenp from './pages/dashpages/Almacen.dash';
import Gastot from './pages/dashpages/Gastos.dash';
import Nomina from './pages/dashpages/Nomina.dash';
import Registerp from './pages/dashpages/Usuarios.p';
//import Usuariosp from './pages/dashpages/Usuarios.p';
import Usuariosc from './components/Usuarios.c';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Layout */}
          {/* Public Pages */}
          <Route path="/" element={<Home Comp={Index} />} />
          <Route path="About" element={<Home Comp={About} />} />
          <Route path="Login" element={<Home Comp={Login} />} />
          <Route path="Register" element={<Home Comp={Registerp} />} />
          {/* Private Pages */}
          <Route element={<RequireAuth />}>
            <Route path="Dashboard" element={<Dashboard Comp={Indexdash} />} />
            <Route
              path="Dashboard/Perfil"
              element={<Dashboard Comp={Perfil} />}
            />
            <Route
              path="Dashboard/Clientes"
              element={<Dashboard Comp={Clientedash} />}
            />
            <Route
              path="Dashboard/Almacenes"
              element={<Dashboard Comp={Almacenp} />}
            />
            <Route
              path="Dashboard/Gastos"
              element={<Dashboard Comp={Gastot} />}
            />
            <Route
              path="Dashboard/Nominas"
              element={<Dashboard Comp={Nomina} />}
            />
            <Route
              path="Dashboard/Usuarios"
              element={<Dashboard Comp={Usuariosc} />}
            />
          </Route>
          {/* Catch all route, must be last */}
          <Route path="*" element={<Home Comp={NoPage} />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
