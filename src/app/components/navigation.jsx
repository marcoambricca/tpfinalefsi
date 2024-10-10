'use client';

import Link from 'next/link';
import '../styles/navigation.css';

export default function NavigationComponent() {
  const toggleNavbar = () => {
    const navbar = document.getElementById('navbar');
    if (navbar.style.left === '0px') {
      navbar.style.left = '-250px';
    } else {
      navbar.style.left = '0px';
    }
  };

  return (
    <div className='header'>
      <div className="left-section">
        <button className="open-btn" onClick={toggleNavbar}>☰</button>
        <div id="navbar" className="navbar">
          <button className="close-btn" onClick={toggleNavbar}>x</button>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <Link href={'/contact'}>Contact</Link>
        </div>
      </div>
      <div className="middle-section">
        <Link href="/" passHref>
          <h1 style={{ cursor: 'pointer' }}>Productos</h1>
        </Link>
      </div>
      <div className="right-section">
        <span>User</span>
      </div>
    </div>
  );
}