import React from 'react';
import Sidebar from '../components/SidebarDash.c';
import Header from '../components/Header.dash.c';
import { useAuthContext } from '../contexts/Auth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
//import Cookies from 'universal-cookie'
const Dashboard = ({ Comp }) => {
  const [User] = useAuthContext();
  const navigate = useNavigate();
  useEffect(() => {
    if (!User.auth) {
      navigate('/Login');
    }
  }, [User]);
  return (
    <>
      <Header />
      <div className="dashwrapper">
        <Sidebar />
        <main>
          <>{Comp ? <Comp /> : <h1>Home</h1>}</>
        </main>
      </div>
    </>
  );
};
export default Dashboard;
