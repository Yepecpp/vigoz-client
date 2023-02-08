import React from 'react';
import Sidebar from '../components/sidebar/SidebarDash.c';
import NavbarDash from '../components/navbar/NavBarDash.c';
import { ThemeProvider } from '@mui/material';
import { theme } from '../components/MediaQuery';

const Dashboard = ({ Comp }) => {
  return (
    <ThemeProvider theme={theme}>
      <NavbarDash />
      <div className="container_dash">
        <Sidebar />
        <main className="main_dash">
          <>{Comp ? <Comp /> : <h1>Home</h1>}</>
        </main>
      </div>
    </ThemeProvider>
  );
};
export default Dashboard;
