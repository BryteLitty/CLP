import React from 'react';

interface ProcessSectionProps {
  number: string;
  title?: string;
  description?: string;
  customStyle?: React.CSSProperties;
}

const ProgressStages: React.FC<ProcessSectionProps> = ({
  number,
  description,
  title,
  customStyle,
}) => {
  const processSectionStyle = {
    background: 'black',
    ...customStyle,
  };

  return (
    <div className='process-section'>
      <div className='flex-col items-center justify-between'>
        <div
          className='steps my-8 flex-col items-center justify-between p-5 text-white'
          style={processSectionStyle}
        >
          <div className='circle flex h-12 w-12 items-center justify-center rounded-full p-3 text-center text-3xl font-bold text-white'>
            {number}
          </div>
          <h4 className='item-heading py-2 text-2xl font-bold'>{title}</h4>
          <p className='item-text'>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProgressStages;
