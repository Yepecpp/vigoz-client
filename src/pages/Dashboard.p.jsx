import React from 'react';
import Sidebar from '../components/SidebarDash.c';
import Header from '../components/Header.dash.c';
//import Cookies from 'universal-cookie'
const Dashboard = ({ Comp }) => {
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
