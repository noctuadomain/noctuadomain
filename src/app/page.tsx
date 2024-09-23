import React from 'react';

import Header from '@/components/elements/header';
import Hero from '@/components/elements/hero';
import AboutUs from '@/components/elements/about-us';
import Showreel from '@/components/elements/showreel';
import Founders from '@/components/elements/founders';
import Roadmap from '@/components/elements/roadmap';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <Header />
      <Hero />
      <AboutUs />
      <Showreel />
      <Founders />
      <Roadmap />
    </div>
  );
};

export default Home;
