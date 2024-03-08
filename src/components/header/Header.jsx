import React, { useRef } from 'react';
import './Header.css';
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom'; // Import Link component

const Header = () => {
  const navRef = useRef();
  const navigate = useNavigate();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const handleHomeClick = () => {
    navigate('/'); 
  };

  return (
    <header>
      <h3 onClick={handleHomeClick}>Healthyfi<span>Me</span></h3>
      <nav ref={navRef}>
        <Link to="/">Home</Link> {/* Use Link for navigation within React */}
        <Link to="/about">About</Link>
        <Link to="/plan">Plan</Link>
        <Link to="/register">Register</Link>
        <button className='nav-btn nav-close-btn' onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className='nav-btn' onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};

export default Header;
