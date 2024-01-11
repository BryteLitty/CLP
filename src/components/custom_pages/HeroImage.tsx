import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const HeroImage: React.FC = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className='container mx-auto'>
      <Slider {...settings} arrows={false}>
        <Image
          src='/images/hero_img_1.svg'
          width={100}
          height={100}
          alt='Hero Image Alt Text' // Provide alt text for accessibility
        />
        <Image
          src='/images/hero2.svg'
          width={100}
          height={100}
          alt='Hero Image Alt Text' // Provide alt text for accessibility
        />
        <Image
          src='/images/hero3.svg'
          width={100}
          height={100}
          alt='Hero Image Alt Text' // Provide alt text for accessibility
        />
      </Slider>
    </div>
  );
};

export default HeroImage;
