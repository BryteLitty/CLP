import Image from 'next/image';
import React from 'react';

interface FeaturedJobProps {
  jobTitle: string;
  company: string;
  location: string;
  timePosted: string;
  image: string;
}

const FeaturedJobLayout: React.FC<FeaturedJobProps> = ({
  jobTitle,
  company,
  location,
  timePosted,
  image,
}) => {
  return (
    <div className='job-box w-full md:p-8'>
      <div className='top-icons flex items-center justify-between py-4 '>
        <div className='labels flex items-center justify-start space-x-2'>
          <div className='rounded-full bg-orange-500 px-3 py-1 text-white'>
            Premium
          </div>
          <div className='rounded-full bg-indigo-700 px-3 py-1 text-white'>
            Paid
          </div>
          <div className='rounded-full bg-green-700 px-3 py-1 text-white'>
            TV Series
          </div>
        </div>

        <Image
          src='/images/icons/Vector.svg'
          alt='icon'
          width={20}
          height={0}
        />
      </div>

      <h1 className='text-xl font-black'>{jobTitle}</h1>

      <div className='my-2 flex items-center justify-start space-x-4'>
        <Image src={image} width={30} height={100} alt='company-image' />
        <h1>{company}</h1>
      </div>

      <div className='flex items-center justify-between'>
        <div className='flex items-center space-x-2'>
          <Image
            src='/images/icons/location.svg'
            width={15}
            height={0}
            alt='company-image'
          />
          <p className='text-small'>{location}</p>
        </div>

        <div className='flex items-center space-x-2'>
          <Image
            src='/images/icons/time.svg'
            width={15}
            height={0}
            alt='company-image'
          />
          <p className='text-small'>{timePosted}</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobLayout;
