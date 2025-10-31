import React from 'react';
import Hero from './Hero';
import OurNew from './OurNew';
import FeaturedSlide from './FeaturedSlide';
import Testimonials from './Testimonials';

const HomePage = () => {
  return (
    <main className="bg-gray-50 min-h-screen">
      <Hero />
      <OurNew />
      <FeaturedSlide />
      <Testimonials />
    </main>
  );
};

export default HomePage;