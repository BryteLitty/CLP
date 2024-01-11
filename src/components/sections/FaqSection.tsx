import React from 'react';

import FaqCard from '@/components/custom_pages/FaqCard';
import Questions from '@/components/custom_pages/Questions';
import TitleLayout from '@/components/layout/TitleLayout';

const FaqSection: React.FC = () => {
  return (
    <div className='container mx-auto my-24'>
      <TitleLayout
        title='GOT ANY QUESTIONS?'
        subTitle='Customer Success is our highest priority'
      />
      <p className='text-center'>
        We’re here to answer all your questions via our Support Docs, Video
        Demos, and 24/7 Live Chat.
      </p>

      <div className='flex flex-col items-center px-3 md:my-20 md:flex-row md:justify-between md:space-x-24'>
        <div className='md:w-2/3'>
          <Questions />
        </div>

        <div className='md:w-1/3'>
          <FaqCard />
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
