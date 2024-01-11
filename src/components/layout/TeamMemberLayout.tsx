import Image from 'next/image';
import React from 'react';

interface TeamMemberProps {
  name: string;
  jobTitle: string;
  image: string;
}

const TeamMemberLayout: React.FC<TeamMemberProps> = ({
  name,
  image,
  jobTitle,
}) => {
  return (
    <div className='team-member-layout'>
      <div className='relative w-full overflow-hidden rounded-2xl'>
        <Image
          src={`/images/others/${image}.jpeg`}
          alt='Testimonial'
          width={300}
          height={300}
          className='person rounded-2xl'
        />

        <div className='absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center text-white'>
          <div className='flex h-full w-full items-end justify-end'>
            <div className='m-4 w-full rounded-2xl bg-black p-6 opacity-80'>
              <div className='flex items-center justify-start space-x-2'>
                <h1 className='font-bold'>{name}</h1>
                <Image
                  src='/images/icons/badge.svg'
                  width={20}
                  height={10}
                  alt='verified'
                />
              </div>
              <p className='my-3'>{jobTitle}</p>
              <div className='flex items-center justify-start space-x-4'>
                <Image
                  src='/images/icons/linkedin.svg'
                  width={20}
                  height={10}
                  alt='verified'
                />
                <Image
                  src='/images/icons/twitter.svg'
                  width={20}
                  height={10}
                  alt='verified'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberLayout;
