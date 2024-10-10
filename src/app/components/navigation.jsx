'use client'

import Link from 'next/link';
import { useState, useEffect } from 'react';
import '../styles/navigation.css'

export default function NavigationComponent() {
    const [scrolledPastCarousel, setScrolledPastCarousel] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const carousel = document.getElementById('carousel');
        if (carousel) {
          const carouselHeight = carousel.offsetHeight;
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          setScrolledPastCarousel(scrollTop > carouselHeight);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const toggleNavbar = () => {
      const navbar = document.getElementById('navbar');
      if (navbar.style.left === '0px') {
        navbar.style.left = '-250px';
      } else {
        navbar.style.left = '0px';
      }
    };
  
    return (
      <div className={`header ${scrolledPastCarousel ? 'scrolled' : ''}`}>
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
          <h1>Productos</h1>
        </div>
        <div className="right-section">
          <span>User</span>
        </div>
      </div>
    );
  }  