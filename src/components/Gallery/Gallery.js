import React, { useState } from 'react';
import './Gallery.scss';

const Gallery = () => {
  const [images] = useState([
    {
      id: 1,
      imgSrc: 'images/gal-1.jpeg',
    },
    {
      id: 2,
      imgSrc: 'images/gal-2.jpeg',
    },
    {
      id: 3,
      imgSrc: 'images/gal-3.jpeg',
    },
    {
      id: 4,
      imgSrc: 'images/gal-4.jpeg',
    },
    {
      id: 5,
      imgSrc: 'images/gal-5.jpeg',
    },
    {
      id: 6,
      imgSrc: 'images/gal-6.jpeg',
    },
    {
      id: 7,
      imgSrc: 'images/gal-7.jpeg',
    },
    {
      id: 8,
      imgSrc: 'images/gal-8.jpeg',
    },
    {
      id: 9,
      imgSrc: 'images/gal-9.jpeg',
    },
    {
      id: 10,
      imgSrc: 'images/gal-10.jpeg',
    },
    {
      id: 11,
      imgSrc: 'images/gal-11.jpeg',
    },
    {
      id: 12,
      imgSrc: 'images/gal-12.jpeg',
    },
    {
      id: 13,
      imgSrc: 'images/gal-13.jpeg',
    },
    {
      id: 14,
      imgSrc: 'images/gal-14.jpeg',
    },
  ]);
  return (
    <div className="gallery">
      {images.map(({ id, imgSrc }) => (
        <figure key={id} className={`gallery__item gallery__item--${id}`}>
          <img src={imgSrc} alt="home gallery" className="gallery__img" />
        </figure>
      ))}
    </div>
  );
};

export default Gallery;
