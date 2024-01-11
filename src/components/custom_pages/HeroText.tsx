import Link from 'next/link';

const HeroText = () => {
  return (
    <div className='container mx-auto my-16 text-center'>
      <h3>WE'RE AFRICA'S HOME OF CASTING</h3>
      <h1 className='m-8 text-5xl font-black'>
        Connecting <span className='talent'>Talents</span> To Global Creators
      </h1>
      <div className='hero-buttons flex w-full flex-col items-center gap-3 px-3 md:flex-row md:justify-center md:gap-0 md:space-x-6 md:px-0'>
        <Link
          href='/waitlist'
          className='btn-blue md:btn w-full rounded-full py-3 shadow-2xl md:w-[150px]'
        >
          <span>Join Waitlist</span>
        </Link>
        <Link
          href='/company'
          className='btn-light md:btn w-full rounded-full py-3 shadow-2xl md:w-[150px]'
        >
          <span>Learn More</span>
        </Link>
      </div>
    </div>
  );
};

export default HeroText;
