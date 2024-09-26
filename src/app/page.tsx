import React from 'react';

import Header from '@/components/elements/header';
import Hero from '@/components/elements/hero';
import AboutUs from '@/components/elements/about-us';
import Showreel from '@/components/elements/showreel';
import Founders from '@/components/elements/founders';
import Roadmap from '@/components/elements/roadmap';
import Reviews from '@/components/elements/reviews';
import Services from '@/components/elements/services';
import Projects from '@/components/elements/projects';
import Contact from '@/components/elements/contact';
import Footer from '@/components/elements/footer';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <Header />
      <Hero />
      <AboutUs />
      <Showreel />
      <Services />
      <Projects />
      <Founders />
      <Roadmap />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
