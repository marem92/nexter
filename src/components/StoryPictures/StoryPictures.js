import React from 'react';
import './StoryPictures.scss';
import Story1 from '../../assets/images/story-1.jpeg';
import Story2 from '../../assets/images/story-2.jpeg';

const StoryPictures = () => {
  return (
    <div className="StoryPictures">
      <img src={Story1} alt="Couple with new house" className="story-img--1" />
      <img src={Story2} alt="New house" className="story-img--2" />
    </div>
  );
};

export default StoryPictures;
