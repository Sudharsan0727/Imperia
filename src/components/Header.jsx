import React from 'react';
import { Link } from 'react-router-dom';
import imperiaLogo from '../assets/img/imperia_logo.svg';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-[100] py-4 bg-white shadow-sm">
      <div className="lux-container flex justify-center">
        <Link to="/" className="w-48 md:w-64 transition-transform hover:scale-105 duration-300">
          <img 
            src={imperiaLogo} 
            alt="Radiance Imperia Logo" 
            className="w-full h-auto object-contain"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
