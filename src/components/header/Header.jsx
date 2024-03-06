import React, { useRef } from 'react';
import './Header.css';
import { FaBars, FaTimes } from "react-icons/fa"

const Header = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  return (
    <header>
      <h3>Healthyfi<span>Me</span></h3>
      <nav ref={navRef}>
        <a href="/#">Home</a>
        <a href="/about">About</a>
        <a href="/plan">Plan</a>
        <a href="/register">Register</a>
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
