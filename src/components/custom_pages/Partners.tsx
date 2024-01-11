import Image from 'next/image';
import React from 'react';

import TitleLayout from '@/components/layout/TitleLayout';

const Partners: React.FC = () => {
  return (
    <div className='container mx-auto my-20'>
      <div className='no-scrollbar mt-3 flex items-center justify-between overflow-x-scroll'>
        <Image
          src='/images/brand-logos/sparrow.png'
          alt='sparrow'
          width={180}
          height={200}
        />
        <Image
          src='/images/brand-logos/multichoice.png'
          alt='multichoice'
          width={180}
          height={200}
        />
        <Image
          src='/images/brand-logos/idfilm.png'
          alt='idfilm'
          width={180}
          height={200}
        />
        <Image
          src='/images/brand-logos/netflix.png'
          alt='netflix'
          width={180}
          height={200}
        />
        <Image
          src='/images/brand-logos/farmhouse.png'
          alt='farmhouse'
          width={180}
          height={200}
        />
      </div>

      <div>
        <TitleLayout
          title='HOW IT WORKS'
          subTitle='Book high-paying modelling and acting, dancing & influencing jobs '
        />
      </div>
    </div>
  );
};

export default Partners;
