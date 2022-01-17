import React from 'react';
import './App.scss';

import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Realtors from './components/Realtors/Realtors';
import Features from './components/Features/Features';
import StoryPictures from './components/StoryPictures/StoryPictures';
import StoryContent from './components/StoryContent/StoryContent';
import Homes from './components/Homes/Homes';
import Gallery from './components/Gallery/Gallery';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className="App">
      <Sidebar />
      <Header />
      <Realtors />
      <Features />
      <StoryPictures />
      <StoryContent />
      <Homes />
      <Gallery />
      <Footer />
    </div>
  );
};

export default App;
