import React from 'react';
import './StoryContent.scss';
import Button from '../Button/Button';

const StoryContent = () => {
  return (
    <div className="StoryContent">
      <h3 className="heading-3 mb-sm">Happy Customers</h3>
      <h2 className="heading-2 heading-2--dark mb-md">
        &ldquo;The best decision of our lives&rdquo;
      </h2>
      <p className="story-text mb-lg">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
        distinctio necessitatibus pariatur voluptatibus. Quidem consequatur
        harum volupta!
      </p>
      <Button text="Find your own home" />
    </div>
  );
};

export default StoryContent;
