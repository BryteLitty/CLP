import React from 'react';

import Talents from '@/components/custom_pages/Talents';
import TitleLayout from '@/components/layout/TitleLayout';

const Spotlight: React.FC = () => {
  return (
    <div className='container mx-auto'>
      <TitleLayout
        title='SPOTLIGHT'
        subTitle='Rising stars and popular picks from our talent network.'
        titleStyle='#FCDC04'
        subtTitleStyle='white'
      />

      <Talents />
    </div>
  );
};

export default Spotlight;
