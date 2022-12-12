import React from "react";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard.p";
import Home from "./pages/Home.p";
import NoPage from "./pages/No.p";
import Login from "./pages/dashpages/Perfil.p";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<Home Comp={NoPage} />} />
        <Route path="/Dashboard/Perfil" element={<Dashboard Comp={Login} />} />
        <Route path="/Dashboard/" element={<Dashboard Comp={Login} />} />

      </Routes>
    </Router>
  );
};

export default App;
