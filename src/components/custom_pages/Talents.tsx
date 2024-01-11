import Image from 'next/image';

const Talents = () => {
  return (
    <div className='container mx-auto'>
      <div className='talents flex flex-col items-center md:flex-row md:justify-between'>
        <Image
          src='/images/talent-cards/tanya.svg'
          alt='talents'
          width={100}
          height={100}
        />
        <Image
          src='/images/talent-cards/emenike.svg'
          alt='talents'
          width={100}
          height={100}
        />
        <Image
          src='/images/talent-cards/rachel.svg'
          alt='talents'
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};

export default Talents;
