'use client'
import React, { useState, useEffect } from 'react';

const items = [
  "https://d34ad2g4hirisc.cloudfront.net/volunteer_positions/photos/000/049/650/original/d1a65893e9e74a931fb97bca529a7263.jpg",
  "https://images.theconversation.com/files/553010/original/file-20231010-25-rr34z3.jpg?ixlib=rb-4.1.0&rect=17%2C413%2C5734%2C2862&q=45&auto=format&w=1356&h=668&fit=crop",
  "https://assets-api.kathmandupost.com/thumb.php?src=https://assets-cdn.kathmandupost.com/uploads/source/news/2019/miscellaneous/Humla-05052019072424.jpg&w=900&height=601",
  "https://www.gonepaltours.com/wp-content/uploads/2019/11/Nepali-New-Year-%E2%80%93-Traditional-Event-in-Nepal-1.jpg"
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  return (
    <div className="carousel rounded-box w-full relative">
      {items.map((item, index) => (
        <div key={index} className={`carousel-item ${index === currentIndex ? 'block' : 'hidden'} w-full relative`}>
          <img src={item} className="w-full img-40vh" alt={`Slide ${index + 1}`} />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <button onClick={prevSlide} className="btn btn-circle">❮</button>
            <button onClick={nextSlide} className="btn btn-circle">❯</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;
