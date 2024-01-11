import React from 'react';

import FaqCardImageLayout from '@/components/layout/FaqCardImageLayout';

const FaqCard: React.FC = () => {
  return (
    <div className='flex-col space-y-8 rounded-2xl bg-black p-8'>
      <h1 className='text-4xl font-black text-white'>
        Don’t see the answer you need?
      </h1>

      <FaqCardImageLayout
        src='/images/faq/on-call.jpeg'
        text='That’s ok. Just drop us a message and we will get back to you ASAP'
        buttonText='Contact Us'
      />

      <FaqCardImageLayout
        src='/images/faq/in-class.jpeg'
        text='Hone your talent anywhere, anytime. Get Started in 4 Easy Steps'
        buttonText='Watch Tutorials'
      />
    </div>
  );
};

export default FaqCard;
