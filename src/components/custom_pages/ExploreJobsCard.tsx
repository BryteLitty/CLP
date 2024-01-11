import Image from 'next/image';
import React from 'react';

const ExploreJobsCard = () => {
  return (
    <div className='featured-images flex items-center justify-start'>
      {/* <Image src="/images/featured-jobs/big-card.svg" alt='big-card' width={100} height={100} /> */}
      {/* <Image src="/images/featured-jobs/featured-cards-md.svg" alt='featured-card' width={100} height={100} /> */}

      <div className='explore-jobs-card w-full rounded-2xl p-8 text-white'>
        <h3>
          Browse jobs from top agencies and creators. Find jobs across various
          film industries and locations. Apply and get shortlisted for vacant
          positions.
        </h3>

        <button className='text-1xl my-6 rounded-3xl bg-white px-6 py-3'>
          Explore 1.2K Jobs
        </button>

        <Image
          src='/images/featured-jobs/agencies-logos.svg'
          width={100}
          height={100}
          alt='agencies-logo'
        />
      </div>
    </div>
  );
};

export default ExploreJobsCard;
