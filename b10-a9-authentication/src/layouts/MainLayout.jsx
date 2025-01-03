import React from 'react';
import { Outlet } from 'react-router-dom';
import AppNavbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = () => {
  return (
    <div>
      <AppNavbar />
      <Outlet />
      <Footer/>
    </div>
  );
};

export default MainLayout;
