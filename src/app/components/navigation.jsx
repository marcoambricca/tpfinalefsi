'use client';

import Link from 'next/link';
import { useCart } from '../../context/cartContext.js';
import '../styles/navigation.css';

export default function NavigationComponent() {
  const { cart } = useCart();
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

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
      <Link href="/cart-details">
        <div className="cart-icon"> 🛒 {totalItems}</div>
        </Link>
      </div>
    </div>
  );
}