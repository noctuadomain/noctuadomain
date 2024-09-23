import React from 'react';

import Header from '@/components/elements/header';
import Hero from '@/components/elements/hero';
import AboutUs from '@/components/elements/about-us';
import Showreel from '@/components/elements/showreel';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <Header />
      <Hero />
      <AboutUs />
      <Showreel />
    </div>
  );
};

export default Home;
