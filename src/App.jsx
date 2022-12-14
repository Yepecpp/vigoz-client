import React from "react";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard.p";
import Home from "./pages/Home.p";
import NoPage from "./pages/No.p";
import Login from "./pages/Login.p";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<Home Comp={NoPage} />} />
        <Route path="/Login" element={<Home Comp={Login}/>}/>
      </Routes>
    </Router>
  );
};

export default App;
