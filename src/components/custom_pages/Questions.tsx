import React from 'react';

import QuestionsLayout from '@/components/layout/QuestionsLayout';
import SampleAnswer from '@/components/layout/SampleAnswer';

const Questions: React.FC = () => {
  return (
    <div className='my-24'>
      <QuestionsLayout
        question='What is CastingAfrica?'
        answer={<SampleAnswer />}
      />

      <QuestionsLayout
        question='Is CastingAfrica an agency?'
        answer={<SampleAnswer />}
      />

      <QuestionsLayout
        question='Why do I have to pay to sign up?'
        answer={<SampleAnswer />}
      />

      <QuestionsLayout
        question='Who can join CastingAfrica?'
        answer={<SampleAnswer />}
      />

      <QuestionsLayout
        question='How does CastingAfrica work?'
        answer={<SampleAnswer />}
      />
    </div>
  );
};

export default Questions;
