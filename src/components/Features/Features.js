import React, { useState } from 'react';
import './Features.scss';
import Feature from '../Feature/Feature';

const Features = () => {
  const [features] = useState([
    {
      id: 0,
      title: "World's best luxury homes",
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus.',
      svgName: 'icon-global',
    },
    {
      id: 1,
      title: 'Only the best properties',
      text: 'Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus rerum sed a eligendi aut quia.',
      svgName: 'icon-trophy',
    },
    {
      id: 2,
      title: 'All homes in top locations',
      text: 'Tenetur distinctio necessitatibus pariatur voluptatibus quidem consequatur harum.',
      svgName: 'icon-map-pin',
    },
    {
      id: 3,
      title: 'New home in one week',
      text: 'Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
      svgName: 'icon-key',
    },
    {
      id: 4,
      title: 'Top 1% realtors',
      text: 'Quidem consequatur harum, voluptatum mollitia quae. Tenetur distinctio necessitatibus pariatur voluptatibus.',
      svgName: 'icon-presentation',
    },
    {
      id: 5,
      title: 'Secure payments on nexter',
      text: 'Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia quae.',
      svgName: 'icon-lock',
    },
  ]);

  return (
    <div className="Features">
      {features.map(feature => (
        <Feature
          key={feature.id}
          title={feature.title}
          text={feature.text}
          svgName={feature.svgName}
        />
      ))}
    </div>
  );
};

export default Features;
