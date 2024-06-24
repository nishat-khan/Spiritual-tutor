import React from 'react';
import './Main.css';
import illustration from '../assets/logo.png'; // Ensure you save the image with this name

const Main = () => {
  return (
    <main className="main-section">
      <div className="text-content">
        <h1>The Best Online Platform You Need To Read, Learn & Understand Quran</h1>
        <p>
          Learn Quran Online For Kids & Adults under the supervision of Qualified Quran Tutors.
          3 Easy Steps to Enroll In Online Quran Classes:
        </p>
        <ul>
          <li>1: Book Free Trial Class.</li>
          <li>2: Schedule Class Day/Time.</li>
          <li>3: Start free 3 Days Quran Classes Online.</li>
        </ul>
      </div>
      <div className="image-content">
        <img src={illustration} alt="Children Reading Quran" />
      </div>
    </main>
  );
};

export default Main;
