'use client'

import { useState, useEffect } from 'react';
import '../styles/carousel.css';
import img1 from '../../assets/images/carousel1.jpg';
import img2 from '../../assets/images/carousel2.jpg';
import img3 from '../../assets/images/carousel3.jpg';
import Image from 'next/image';

const images = [img1, img2, img3];

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000);

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="carousel-container">
      <div
        className="carousel"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((image, index) => (
          <div className="carousel-slide" key={index}>
            <Image className="carousel-image" src={image} alt={`Slide ${index + 1}`}/>
          </div>
        ))}
      </div>
    </div>
  );
}
