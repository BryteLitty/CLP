import FeaturedJobLayout from '@/components/layout/FeaturedJobLayout';

const JobsContainer = () => {
  return (
    <div className='w-full'>
      <div className='flex w-full flex-col gap-4 md:flex-row md:space-x-8'>
        <FeaturedJobLayout
          jobTitle='Actors Wanted for a TV Series'
          company='APEX AGENCY'
          location='Capetown, South Africa'
          timePosted='2 Hours Ago'
          image='/images/icons/apex-agency.png'
        />

        <FeaturedJobLayout
          jobTitle='Female Models Needed Urgently'
          company='AKWABA QUEENS'
          location='Kumasi, Ghana'
          timePosted='12 Hours Ago'
          image='/images/icons/abena.png'
        />
      </div>

      <div className='mt-4 flex w-full flex-col gap-4 md:mt-4 md:flex-row md:space-x-8'>
        <FeaturedJobLayout
          jobTitle='Lifestyle Influencer Needed for...'
          company='QUILOX HIGHGARDENS'
          location='Lagos, Nigeria'
          timePosted='16 Hours Ago'
          image='/images/icons/quilox.jpeg'
        />

        <FeaturedJobLayout
          jobTitle='Actors & Actress Wanted for...'
          company='THE MOVIE CHANNEL'
          location='Accra, Ghana'
          timePosted='2 Days Ago'
          image='/images/icons/themovie.png'
        />
      </div>
    </div>
  );
};

export default JobsContainer;
