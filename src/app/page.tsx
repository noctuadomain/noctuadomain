import React from 'react';

import Header from '@/components/elements/header';
import Hero from '@/components/elements/hero';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <Header />
      <Hero />
      <div className="h-[2000px]"></div>
    </div>
  );
};

export default Home;
