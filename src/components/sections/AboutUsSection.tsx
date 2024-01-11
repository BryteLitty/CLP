import React from 'react';

import { cn } from '@/lib/utils';

const InfoCard = ({
  title,
  description,
  color,
  smallText,
}: {
  title: string;
  description: string;
  color: string;
  smallText?: string;
}) => {
  return (
    <div
      className={cn(
        `box-shadow w-full rounded-2xl p-6 text-white md:w-max md:min-w-[270.5px] bg-${color}`,
        color === 'white' && 'text-black'
      )}
    >
      <div className='flex items-baseline gap-2'>
        <span className='text-xl'>{smallText}</span>
        <h1 className='text-6xl'>{title}</h1>
      </div>
      <p className='mt-4'>{description}</p>
    </div>
  );
};

const AboutUsSection: React.FC = () => {
  return (
    <div className='container mx-auto mb-24 mt-40 grid grid-cols-1 gap-10 md:grid-cols-7'>
      <div className='col-span-3'>
        <div className='ml-8 grid grid-cols-1 gap-y-4 md:ml-0 md:grid-cols-2 md:gap-x-10'>
          <InfoCard
            title='1.3K +'
            description='Members onboard'
            color='black'
          />
          <InfoCard title='8K +' description='Jobs Provided' color='primary' />
          <InfoCard
            smallText='GH¢'
            title='95M +'
            description='Payout to Talents'
            color='light-blue'
          />
          <InfoCard
            title='300 +'
            color='white'
            description='Educational courses'
          />
        </div>
      </div>

      <div className='col-span-4 row-start-1 pl-8 md:row-auto'>
        <h2 className='text-primary'>ABOUT US</h2>
        <h1 className='my-4 text-3xl font-bold'>What we do</h1>
        <p className='w-full'>
          We connect African talent and global content creators by providing a
          robust peer to peer (p2p) marketplace, endowed with cutting-edge
          casting, upskilling, and video sharing tools that make it a top-tier
          resource for the discovery and procurement of talent globally.
        </p>

        <h1 className='my-4 text-3xl font-bold'>In Just A Year</h1>
        <p className='w-full'>
          We have grown our network of partners and creators and have
          significantly impacted the Ghanaian Film Industry
        </p>
      </div>
    </div>
  );
};

export default AboutUsSection;
