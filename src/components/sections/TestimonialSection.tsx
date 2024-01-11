import React from 'react';

import TestimonialCard from '@/components/custom_pages/TestimonialCard';
import TitleLayout from '@/components/layout/TitleLayout';

const TestimonialSection: React.FC = () => {
  return (
    <div className='container mx-auto my-24'>
      <TitleLayout
        title='TESTIMONIALS'
        subTitle='What everyone says about us.'
      />
      <TestimonialCard />
    </div>
  );
};

export default TestimonialSection;
