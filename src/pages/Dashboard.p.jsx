import React from 'react';
import Sidebar from '../components/SidebarDash.c';
import Navbar from '../components/Navbar.c';
const Dashboard = ({ Comp }) => {
  return (
    <>
      <Navbar />
      <div className="container_dash">
      <Sidebar />
        <main>
          <>{Comp ? <Comp /> : <h1>Home</h1>}</>
        </main>
      </div>
    </>
  );
};
export default Dashboard;
