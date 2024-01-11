import ProgressStages from '@/components/custom_pages/ProgressStages';

const ProcessSection = () => {
  return (
    <div className='item-center container mx-auto flex flex-col justify-between px-3 md:flex-row md:space-x-8'>
      {/* Process Section */}
      <div className='progress-stages md:w-1/3'>
        <ProgressStages
          number='1'
          title='Create Your Profile'
          description='Create your professional talent profile. Update your account.'
        />

        <ProgressStages
          number='2'
          title='Apply For Jobs'
          description='Browse, shortlist and apply for available jobs on the job board.'
          customStyle={{ backgroundColor: '#EBF1FF', color: 'black' }}
        />

        <ProgressStages
          number='3'
          title='Get Booked'
          description='Receive application update notifications and track the status of every job post.'
          customStyle={{ backgroundColor: '#FFFFFF', color: 'black' }}
        />
      </div>

      {/* Youtube Video Section */}
      <div className='youtube-video mx-auto my-12 flex-col items-center p-12 md:w-3/4 md:justify-center'>
        <iframe
          className='rounded-2xl'
          width='100%'
          height='400'
          src='https://www.youtube.com/embed/LfR5CNYvjMI'
          title='Casting Crown Intro Clip'
        />

        <div className='get-started mt-8'>
          <h1 className='text-xl font-bold md:text-3xl'>Get Started With Us</h1>

          <div className='flex flex-col items-center gap-3 md:flex-row md:justify-between md:gap-0'>
            <p>
              Register as a talent, agency or a creator. Talent and job database
              from across Africa right at your disposal.
            </p>

            <button className='btn-primary w-full md:w-max'>Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;
