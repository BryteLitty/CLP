import React from 'react';

const AboutHeroSetion: React.FC = () => {
  return (
    <div className='about-image-container container relative mx-auto mb-24 mt-20'>
      <div
        className='relative h-full rounded-2xl bg-cover bg-center'
        style={{ backgroundImage: 'url("/images/others/young-lady.png")' }}
      >
        <div className='absolute inset-0 rounded-2xl bg-black opacity-20'></div>

        <div className='relative z-10 flex h-full flex-col items-center justify-center'>
          <h3 className='small-heading text-white'>WHO ARE WE</h3>
          <h1 className='text-center text-5xl font-extrabold text-white'>
            We’re Africa’s Home of Casting
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AboutHeroSetion;
