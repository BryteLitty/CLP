import React from 'react';

const PerformersSection: React.FC = () => {
  return (
    <>
      <div className='about-image-container container relative mx-auto mb-24 mt-20'>
        <div
          className='relative h-full rounded-2xl bg-cover bg-center'
          style={{ backgroundImage: 'url("/images/others/on-stage.jpeg")' }}
        >
          <div className='absolute inset-0 rounded-2xl bg-black opacity-50'></div>

          <div className='relative z-10 flex h-full flex-col items-end justify-end'>
            <div className='m-10 rounded-2xl bg-black p-6 text-white md:w-1/3'>
              <h1 className='text-3xl font-bold'>Talents & Performers</h1>
              <p className='my-4'>
                Our cutting edge tools provide newbies and rising talents living
                in Africa the opportunities to create professional talent
                profiles showing the best of them in just one click making it
                easier for casting professionals and content creators to find
                them when casting.{' '}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='about-image-container container relative mx-auto mb-24 mt-20'>
        <div
          className='relative h-full rounded-2xl bg-cover bg-center'
          style={{ backgroundImage: 'url("/images/others/ladies.jpeg")' }}
        >
          <div className='absolute inset-0 rounded-2xl bg-black opacity-50'></div>

          <div className='relative z-10 flex h-full flex-col items-start justify-end'>
            <div className='bg-primary m-10 rounded-2xl p-6 text-white md:w-1/3'>
              <h1 className='text-3xl font-bold'>Casting Professionals</h1>
              <p className='my-4'>
                Talent scoting can be duanting. However with our robust casting
                tools you can save time, energy and money. From the comfort of
                your home or office post and manage jobs, browse, shortlist,
                manage applications and book talentwith just clicks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PerformersSection;
