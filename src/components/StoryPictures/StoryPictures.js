import React from 'react';
import './StoryPictures.scss';

const StoryPictures = () => {
  return (
    <div className="StoryPictures">
      <img
        src="images/story-1.jpeg"
        alt="Couple with new house"
        className="story-img--1"
      />
      <img src="images/story-2.jpeg" alt="New house" className="story-img--2" />
    </div>
  );
};

export default StoryPictures;
