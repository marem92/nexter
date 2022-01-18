import React, { useState } from 'react';
import './Homes.scss';
import HomeCard from '../HomeCard/HomeCard';

const Homes = () => {
  const [homes] = useState([
    {
      id: 0,
      name: 'Beautiful Family House',
      location: 'USA',
      rooms: '5',
      area: '325',
      price: '1.200.000',
      imgSrc: 'images/house-1.jpeg',
    },
    {
      id: 1,
      name: 'Modern Glass Villa',
      location: 'Canada',
      rooms: '6',
      area: '450',
      price: '2.750.000',
      imgSrc: 'images/house-2.jpeg',
    },
    {
      id: 2,
      name: 'Cozy Country House',
      location: 'UK',
      rooms: '4',
      area: '250',
      price: '850.000',
      imgSrc: 'images/house-3.jpeg',
    },
    {
      id: 3,
      name: 'Large Rustical Villa',
      location: 'Portugal',
      rooms: '6',
      area: '480',
      price: '1.950.000',
      imgSrc: 'images/house-4.jpeg',
    },
    {
      id: 4,
      name: 'Majestic Palace House',
      location: 'Germany',
      rooms: '18',
      area: '4230',
      price: '9.500.000',
      imgSrc: 'images/house-5.jpeg',
    },
    {
      id: 5,
      name: 'Modern Family Apartment',
      location: 'Italy',
      rooms: '3',
      area: '180',
      price: '600.000',
      imgSrc: 'images/house-6.jpeg',
    },
  ]);
  return (
    <div className="Homes">
      {homes.map(({ id, ...otherProps }) => (
        <HomeCard key={id} {...otherProps} />
      ))}
    </div>
  );
};

export default Homes;
