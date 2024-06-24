import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Adjust the path according to your project structure

const Main = () => {
  return (
    <main>
      <section id="about">
        <h2>About</h2>
        <img src={logo} alt="Quran Tutor Logo" style={{ width: '150px', height: '150px' }} />
        <p>Welcome to the Quran Tutor in Dubai website. We provide personalized Quran lessons to help you learn and understand the Holy Quran.</p>
        <p>We teach in Arabic, Urdu, and English.</p>
      </section>
      <section id="more-services">
        <h2>Learn More About Our Services</h2>
        <Link to="/services">
          <button style={{ fontSize: '1.5em' }}>View Services</button>
        </Link>
      </section>
    </main>
  );
};

export default Main;
