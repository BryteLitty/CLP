import React from 'react';

import WaitlistFormLayout from '@/components/layout/WaitlistFormLayout';

const WaitlistConnectSection: React.FC = () => {
  return (
    <div className='container mx-auto my-8 flex flex-col gap-3 px-3 md:my-32 md:flex-row md:items-center md:justify-between md:gap-0 md:space-x-36'>
      <div className='flex flex-col justify-between space-y-10 md:w-1/2'>
        <h1 className='text-3xl font-bold md:text-4xl'>
          Connecting Talents To Global Creators
        </h1>

        <div className='rounded-3xl bg-black p-10 text-white'>
          <h1 className='text-2xl font-bold'>Join As Talent</h1>
          <p className='mt-4'>
            Whether you’re a seasoned professional or just starting out your
            acting career, our cutting edge tools provide newbies and rising
            talents living in Africa the opportunities to create professional
            talent profiles showing the best of them in just one click making it
            easier for casting professionals and content creators to find them
            when casting.
          </p>
        </div>

        <div className='bg-primary rounded-3xl p-10 text-white'>
          <h1 className='text-2xl font-bold'>Join As A Creator</h1>
          <p className='mt-4'>
            Are you looking to for talents? Are you an agency looking to build a
            rooster of talents? Talent scouting can be daunting. However with
            our robust casting tools you can save time, energy and money. From
            the comfort of your home or office post and manage jobs, browse,
            shortlist, manage applications and book talent with just clicks.
          </p>
        </div>
      </div>

      {/* Form */}
      <WaitlistFormLayout />
    </div>
  );
};

export default WaitlistConnectSection;
