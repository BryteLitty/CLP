import Image from 'next/image';
import React from 'react';

interface FaqImageCardProps {
  src: string;
  buttonText: string;
  text: string;
}

const FaqCardImageLayout: React.FC<FaqImageCardProps> = ({
  src,
  buttonText,
  text,
}) => {
  return (
    <div>
      <div className='faq-image flex flex-col items-center rounded-2xl bg-white p-5 md:flex-row md:justify-between md:space-x-4 '>
        <div className='flex-col items-center justify-between space-y-6'>
          <div>
            <p>{text}</p>
          </div>

          <div>
            <button className='bg-yellow w-full rounded-3xl px-8 py-2 text-white md:w-max'>
              {buttonText}
            </button>
          </div>
        </div>

        <div className='rounded-2xl'>
          <Image
            src={src}
            width={200}
            height={100}
            alt='faq-img'
            className='mt-2 min-h-full w-full rounded-lg'
          />
        </div>
      </div>
    </div>
  );
};

export default FaqCardImageLayout;
