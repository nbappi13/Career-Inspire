import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Career Counseling</div>
        <div className="space-x-4">
          <Link to="/" className="text-white">Home</Link>
          <Link to="/profile" className="text-white">My Profile</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
