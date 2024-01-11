import Image from 'next/image';
import React from 'react';

interface HeroSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  style?: React.CSSProperties;
}

const ContactHeroSection: React.FC<HeroSectionProps> = ({
  title,
  description,
  imageSrc,
  style,
}) => {
  return (
    <div className='container relative mx-auto mt-20 px-2 md:px-0'>
      <div
        style={{ ...style }}
        className='contact-hero-bg flex flex-col overflow-hidden rounded-2xl bg-black text-white md:justify-center md:px-12'
      >
        <div className='relative z-10 m-8 flex md:space-x-8'>
          <div className='md:w-1/2'>
            <h1 className='text-4xl font-bold md:text-7xl'>{title}</h1>
            <p className='mt-6 md:text-2xl'>{description}</p>
          </div>
        </div>
        <div className='md:hidden'>
          <Image src={imageSrc} width={470} height={200} alt='guy-flex' />
        </div>
      </div>

      <div className='hidden md:block'>
        <div className='bottom-0 right-16 h-[400px] overflow-hidden md:absolute'>
          <Image src={imageSrc} width={470} height={100} alt='guy-flex' />
        </div>
      </div>
    </div>
  );
};

export default ContactHeroSection;
