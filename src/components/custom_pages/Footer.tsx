import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';

const Footer: React.FC = () => {
  return (
    <footer className='flex flex-col items-center p-1 pb-12 text-white md:block md:p-36'>
      <div className='container mx-auto flex flex-col items-center gap-4 text-white md:flex-row md:items-start md:justify-between'>
        <div className='flex items-center justify-start space-x-1'>
          <Image
            src='/images/logos/logo-icon-white.svg'
            width={50}
            height={100}
            alt='brand-white'
          />

          <Image
            src='/images/logos/footer-brand-mg.svg'
            width={200}
            height={100}
            alt='brand-white'
          />
        </div>

        <div className='social-icons flex items-center justify-between space-x-6'>
          <Image
            src='/images/icons/facebook.svg'
            width={40}
            height={100}
            alt='facebook'
          />
          <Image
            src='/images/icons/instagram.svg'
            width={40}
            height={100}
            alt='instagram'
          />
          <Image
            src='/images/icons/twitter.svg'
            width={40}
            height={100}
            alt='twitter'
          />
          <Image
            src='/images/icons/whatsapp.svg'
            width={40}
            height={100}
            alt='whatsapp'
          />
          <Image
            src='/images/icons/youtube.svg'
            width={40}
            height={100}
            alt='youtube'
          />
          <Image
            src='/images/icons/linkedin.svg'
            width={40}
            height={100}
            alt='linkedin'
          />
        </div>
      </div>

      <div className='container mx-auto mb-12 mt-8 w-full border-t border-white'></div>

      <div className='container mx-auto flex flex-col items-center px-10 md:flex-row md:items-start md:justify-between md:px-0'>
        <div className='md:w-1/4'>
          <div className='countries grid grid-cols-3 gap-4 md:flex md:justify-between md:gap-0 md:space-x-4'>
            <Image
              src='/images/countries/ghana.png'
              width={60}
              height={100}
              alt='ghana'
              className='rounded-lg'
            />
            <Image
              src='/images/countries/nigeria.png'
              width={65}
              height={100}
              alt='nigeria'
              className='rounded-lg'
            />
            <Image
              src='/images/countries/south-africa.png'
              width={60}
              height={100}
              alt='south-africa'
              className='rounded-lg'
            />
            <Image
              src='/images/countries/kenya.png'
              width={60}
              height={100}
              alt='kenya'
              className='rounded-lg'
            />
            <Image
              src='/images/countries/uganda.png'
              width={60}
              height={100}
              alt='kenya'
              className='rounded-lg'
            />
          </div>
          <span className='my-6 inline-block text-white'>
            Join thousands of African talent around the world who are been
            discovered and connecting to local and global opportunities.
          </span>
          <Link href='/waitlist'>
            <button className='w-full rounded-full bg-white px-6 py-3 md:w-max md:py-4'>
              Join Waitlist
            </button>
          </Link>
        </div>

        <div className='mt-10 grid grid-cols-2 justify-between gap-10 md:mt-0 md:flex md:items-start md:space-x-16 md:pl-16'>
          <div className=''>
            <h1 className='mb-6 font-bold'>Company</h1>
            <ul className='md:space-y-6'>
              <li>
                <UnstyledLink href='/'>About Us</UnstyledLink>
              </li>
            </ul>
          </div>

          <div className=''>
            <h1 className='mb-6 font-bold'>Support</h1>
            <ul className='flex-col items-start justify-start space-y-6'>
              <li>
                <UnstyledLink href='/contact'>Contact Us</UnstyledLink>
              </li>
              <li>
                <UnstyledLink href='/'>FAQs</UnstyledLink>
              </li>
            </ul>
          </div>

          <div className=''>
            <h1 className='mb-6 font-bold'>Download App</h1>
            <ul className='flex-col items-center justify-start space-y-6'>
              <li>
                <UnstyledLink href='/'>Google Play Store</UnstyledLink>
              </li>
              <li>
                <UnstyledLink href='/'>Apple App Store</UnstyledLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <small className='container mx-auto mt-10 flex justify-center text-white md:justify-start md:text-start'>
        &copy; Copyright, All Rights Reserved. CastingAfrica 2023
      </small>
    </footer>
  );
};

export default Footer;
