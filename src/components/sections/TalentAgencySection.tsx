import Link from 'next/link';

const TalentAgencySection = () => {
  return (
    <div className='container mx-auto mb-24 mt-10 md:mt-32'>
      <div className='flex flex-col md:flex-row md:items-center md:justify-between'>
        <div className='md:w-1/2'>
          <h1 className='mb-4 text-4xl font-bold'>Talent Agency</h1>
          <p>
            Managing your talent rooster just got easier. Create and manage your
            talent profiles, apply for jobs for them and manage the
            applications. With tons of unsigned talent, CastingAfrica makes it
            easy to find your next great client.
          </p>
        </div>

        <div className='flex justify-center md:items-end md:justify-end'>
          <Link href='/waitlist' className='w-full'>
            <button className='bg-primary w-full rounded-3xl px-6 py-3'>
              Join Waitlist
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TalentAgencySection;
