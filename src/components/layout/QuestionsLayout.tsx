import Image from 'next/image';
import React, { useState } from 'react';

interface QuestionLayoutProps {
  question: string;
  answer?: React.ReactNode;
}

const QuestionsLayout: React.FC<QuestionLayoutProps> = ({
  question,
  answer,
}) => {
  const [isAnswerVisible, setAnswerVisible] = useState(false);

  const toggleAnswerVisibility = () => {
    setAnswerVisible(!isAnswerVisible);
  };

  return (
    <div className='my-16'>
      <div className='flex w-full items-center justify-between'>
        <div className='flex justify-start space-x-4'>
          <Image
            src='/images/icons/question-mark.svg'
            alt='question-mark'
            width={25}
            height={0}
          />
          <h1 className='text-2xl font-black'>{question}</h1>
        </div>

        <Image
          src={
            isAnswerVisible
              ? '/images/icons/collapse-icon.svg'
              : '/images/icons/expand-icon.svg'
          }
          alt='question-mark'
          width={25}
          height={0}
          onClick={toggleAnswerVisibility}
          style={{ cursor: 'pointer' }}
        />
      </div>

      {isAnswerVisible && (
        <div className='w-full px-10'>
          <div className='mx-auto mb-4 mt-6 w-full border-t border-gray-500'></div>
          {answer}
          <div className='mx-auto mb-4 mt-6 w-full border-t border-gray-500'></div>
        </div>
      )}
    </div>
  );
};

export default QuestionsLayout;
