import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Quran Tutor in Dubai</h1>
      <nav>
        <ul>
          <li><Link to="#about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="#contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
