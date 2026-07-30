import React from 'react';
import Hero from '../sections/Hero';
import Features from '../sections/Features';
import OpenSource from '../sections/OpenSource';
import Download from '../sections/Download';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const Home = () => {
  useDocumentTitle('Video Downloader App - Download Videos from Any Platform', false);

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
