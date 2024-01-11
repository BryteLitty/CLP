import React from 'react';

interface TitleProps {
  title: string;
  subTitle: string;
  customStyle?: React.CSSProperties;
  titleStyle?: string;
  subtTitleStyle?: string;
}

const TitleLayout: React.FC<TitleProps> = ({
  title,
  subTitle,
  customStyle,
  subtTitleStyle,
  titleStyle,
}) => {
  const defaultStyle = {
    color: titleStyle,
    ...customStyle,
  };

  const subTitleStyle = {
    color: subtTitleStyle,
  };

  return (
    <div className='mt-20 text-center'>
      <h2 className='section-title' style={defaultStyle}>
        {title}
      </h2>
      <h1
        className='section-sub-title mx-auto p-4 text-3xl font-bold md:w-6/12 md:text-4xl'
        style={subTitleStyle}
      >
        {subTitle}
      </h1>
    </div>
  );
};

export default TitleLayout;
