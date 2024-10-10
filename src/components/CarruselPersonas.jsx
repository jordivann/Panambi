import React, { useState, useEffect } from 'react';
import './styles/carruselPersonas.css';

const CarruselPersonas = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const personas = [
    'https://firebasestorage.googleapis.com/v0/b/panambi-5d749.appspot.com/o/CV2.png?alt=media&token=6dff7dcc-3e58-4088-98df-a85a4ceb0da8',
    'https://firebasestorage.googleapis.com/v0/b/panambi-5d749.appspot.com/o/CV2.png?alt=media&token=6dff7dcc-3e58-4088-98df-a85a4ceb0da8',
    'https://firebasestorage.googleapis.com/v0/b/panambi-5d749.appspot.com/o/CV2.png?alt=media&token=6dff7dcc-3e58-4088-98df-a85a4ceb0da8',
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
