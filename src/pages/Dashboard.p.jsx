import React from 'react';
import Sidebar from '../components/SidebarDash.c';
import Navbar from '../components/Navbar.c';
//import Cookies from 'universal-cookie'
const Dashboard = ({ Comp }) => {
  return (
    <>
      <Navbar />
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
