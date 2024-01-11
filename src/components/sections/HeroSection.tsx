import React from 'react';

import HeroImage from '@/components/custom_pages/HeroImage';
import HeroText from '@/components/custom_pages/HeroText';
import Navbar from '@/components/custom_pages/Navbar';

const HeroSection: React.FC = () => {
  return (
    <div className='hero-section'>
      <Navbar />
      <HeroText />
      <HeroImage />
    </div>
  );
};

export default HeroSection;
