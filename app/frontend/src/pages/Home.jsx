import React from 'react';
import Hero from '../sections/Hero';
import Features from '../sections/Features';
import OpenSource from '../sections/OpenSource';
import Download from '../sections/Download';

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <OpenSource />
      <Download />
    </div>
  );
};

export default Home;
