import React, { useState, useEffect } from 'react';
import './styles/carruselPersonas.css';

const CarruselPersonas = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const personas = [
    '/images/CV2.png',
    '/images/CV2.png',
    '/images/CV2.png'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % personas.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [personas.length]);

  const handleIndicatorClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="round-carousel-container">
      <div className="round-carousel">
        {personas.map((image, index) => (
          <div 
            key={index} 
            className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
          >
            <img src={image} alt={`Imagen ${index + 1}`} />
          </div>
        ))}
      </div>
      <ul className="carousel-indicators">
        {personas.map((_, index) => (
          <li
            key={index}
            className={index === activeIndex ? 'active' : ''}
            onClick={() => handleIndicatorClick(index)}
          ></li>
        ))}
      </ul>
    </div>
  );
};

export default CarruselPersonas;