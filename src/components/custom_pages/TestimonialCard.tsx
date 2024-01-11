import Image from 'next/image';
import React from 'react';

const TestimonialCard: React.FC = () => {
  return (
    <div className='md:3/4 relative my-24 flex w-full flex-col items-center overflow-hidden rounded-2xl bg-black p-8 md:flex-row md:justify-between md:space-x-16'>
      <div className='relative overflow-hidden rounded-2xl md:w-1/4'>
        <Image
          src='/images/others/komla.jpeg'
          alt='Testimonial'
          width={380}
          height={9}
          className='rounded-2xl'
        />

        <div className='absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center text-white'>
          <div className='flex h-full w-full items-end justify-end'>
            <div className='bg-primary m-4 w-full rounded-2xl p-4'>
              <div className='flex items-center justify-start space-x-2'>
                <h1 className='font-bold'>Kodjovi Komla Adjei</h1>
                <Image
                  src='/images/icons/verified.svg'
                  width={20}
                  height={10}
                  alt='verified'
                />
              </div>
              <p className='my-3'>Chief Executive Officer</p>
              <small className='font-bold'>Apex Agency</small>
            </div>
          </div>
        </div>
      </div>

      <div className='box-shadow border-quote mt-3 rounded-2xl px-4 py-4 text-white md:mt-0 md:h-5/6 md:w-3/4 md:px-12 md:py-36'>
        <div className='flex flex-col items-start justify-center md:space-y-12'>
          <Image
            src='/images/icons/quote.svg'
            width={50}
            height={10}
            alt='quote'
          />

          <h1 className='mt-3 md:text-3xl'>
            “It was amazing how quick it was to cast for my film in Ghana even
            though I lived in the UK.”
          </h1>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
