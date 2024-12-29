import React from 'react';
import { Outlet } from 'react-router-dom';
import AppNavbar from '../components/Navbar';

const MainLayout = () => {
  return (
    <div>
      <AppNavbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
