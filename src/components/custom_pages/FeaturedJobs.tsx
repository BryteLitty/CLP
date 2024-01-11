import ExploreJobsCard from '@/components/custom_pages/ExploreJobsCard';
import JobsContainer from '@/components/custom_pages/JobsContainer';
import TitleLayout from '@/components/layout/TitleLayout';

const FeaturedJobs = () => {
  return (
    <div className='container mx-auto w-full'>
      <TitleLayout
        title='FEATURED JOBS'
        subTitle='Explore and apply to posted jobs that suit your talents & skills.'
      />

      <div className='my-20 flex flex-col-reverse items-center justify-between gap-6 md:flex-row md:gap-0 md:space-x-14'>
        <div className='w-full px-3 md:w-1/3'>
          <ExploreJobsCard />
        </div>

        <div className='md:w-2/3'>
          <JobsContainer />
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobs;
