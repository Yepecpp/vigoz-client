import React from 'react';
import Sidebar from '../components/sidebar/SidebarDash.c';
import NavbarDash from '../components/navbar/NavBarDash.c';

const Dashboard = ({ Comp }) => {
  return (
    <>
      <NavbarDash />
      <div className="container_dash">
        <Sidebar />
        <main className="main_dash">
          <>{Comp ? <Comp /> : <h1>Home</h1>}</>
        </main>
      </div>
    </>
  );
};
export default Dashboard;
