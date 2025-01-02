import React, { useContext, useState } from 'react';
import { Navbar, MobileNav, Typography, Button, IconButton } from '@material-tailwind/react';
import { Link, useNavigate } from 'react-router-dom'; 
import { AuthContext } from '../context/AuthContext';
import logo from '../assets/logo.png';
import '../styles/navbarStyles.css'; 

const AppNavbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const { currentUser, logout } = useContext(AuthContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate(); 

  React.useEffect(() => {
    window.addEventListener('resize', () => window.innerWidth >= 960 && setOpenNav(false));
  }, []);

  const handleLogout = () => {
    logout();
  };

  const handleDropdownClick = (e) => {
    e.preventDefault();
    setShowDropdown(!showDropdown);
  };

  const handleLinkClick = (e, target) => {
    e.preventDefault();
    navigate(`/#${target}`);
    setShowDropdown(false);
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    navigate('/');
  };

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal relative"
      >
        <Link to="/" onClick={handleHomeClick}> 
          Home
        </Link>
        <button 
          className="dropdown-arrow"
          onClick={handleDropdownClick}
        >
          <svg
            className={`w-4 h-4 ml-1 transition-transform ${showDropdown ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>
        {showDropdown && (
          <ul className="dropdown-menu show">
            <li>
              <a href="#services" onClick={(e) => handleLinkClick(e, 'services')}>Services</a>
            </li>
            <li>
              <a href="#why-career-inspire" onClick={(e) => handleLinkClick(e, 'why-career-inspire')}>Why Career Inspire</a>
            </li>
            <li>
              <a href="#success-stories" onClick={(e) => handleLinkClick(e, 'success-stories')}>Success Stories</a>
            </li>
          </ul>
        )}
      </Typography>
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
        <Link to="/services" className="flex items-center">
          Services
        </Link>
      </Typography>
      {currentUser && (
        <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
          <Link to="/resources" className="flex items-center">
            Resources
          </Link>
        </Typography>
      )}
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
        <Link to="/about" className="flex items-center">
          About
        </Link>
      </Typography>
      {currentUser && (
        <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
          <Link to="/profile" className="flex items-center">
            My Profile
          </Link>
        </Typography>
      )}
    </ul>
  );

  return (
    <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography as="a" href="/" className="mr-4 cursor-pointer py-1.5 font-medium">
          <img src={logo} alt="Logo" className="h-12 w-12 rounded-full inline-block mr-2"/>
          Career Inspire
        </Typography>
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block">{navList}</div>
          <div className="hidden lg:flex items-center gap-2">
            {currentUser ? (
              <>
                <div className="relative group">
                  <img src={currentUser.photoURL} alt="User" className="h-10 w-10 rounded-full"/>
                  <div className="absolute top-full mt-2 hidden group-hover:block bg-white text-gray-800 text-sm rounded-lg p-2 shadow-lg">
                    {currentUser.displayName}
                  </div>
                </div>
                <Button variant="text" size="sm" className="hidden lg:inline-block" onClick={handleLogout}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button variant="text" size="sm" className="hidden lg:inline-block">
                  <Link to="/login">Login</Link>
                </Button>
                <Button variant="gradient" size="sm" className="hidden lg:inline-block">
                  <Link to="/signup">Sign Up</Link>
                </Button>
              </>
            )}
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <MobileNav open={openNav}>
        {navList}
        <div className="flex items-center gap-2">
          {currentUser ? (
            <>
              <div className="relative group">
                <img src={currentUser.photoURL} alt="User" className="h-10 w-10 rounded-full"/>
                <div className="absolute top-full mt-2 hidden group-hover:block bg-white text-gray-800 text-sm rounded-lg p-2 shadow-lg">
                  {currentUser.displayName}
                </div>
              </div>
              <Button fullWidth variant="text" size="sm" onClick={handleLogout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button fullWidth variant="text" size="sm">
                <Link to="/login">Login</Link>
              </Button>
              <Button fullWidth variant="gradient" size="sm">
                <Link to="/signup">Sign Up</Link>
              </Button>
            </>
          )}
        </div>
      </MobileNav>
    </Navbar>
  );
};

export default AppNavbar;
