import React, { useState, useEffect } from 'react';
import './styles/cardCarrusel.css';

const CardCarrusel = ({ title, photos }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [photos.length]);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  return (
    <div className="card">
      <h2>
        <a href={`/${title.toLowerCase()}`}>{title}</a>
      </h2>
      <div className="carousel">
        <div 
          className="carousel-inner" 
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {photos.map((photo, index) => (
            <div key={index} className="carousel-item">
              <img src={photo} alt={`${title} ${index + 1}`} />
            </div>
          ))}
        </div>
        <button className="carousel-control prev" onClick={handlePrev}>
          <span className="carousel-control-icon">&#9664;</span>
          <span className="sr-only">Previous</span>
        </button>
        <button className="carousel-control next" onClick={handleNext}>
          <span className="carousel-control-icon">&#9654;</span>
          <span className="sr-only">Next</span>
        </button>
      </div>
    </div>
  );
};

export default CardCarrusel;