import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { cn } from '@/lib/utils';

import UnstyledLink from '@/components/links/UnstyledLink';

const links = [
  { href: '/', label: 'Home' },
  { href: '/company', label: 'Company' },
  { href: '/contact', label: 'Contact Us' },
  // { href: '/login', label: 'Login' },
];

const Navbar = () => {
  const [showMenu, toggleMenu] = useState(false);
  const router = useRouter();

  return (
    <header className='container relative mx-auto px-3 py-6 md:px-0'>
      <div className='flex items-center justify-between'>
        <h1 className='flex items-center text-2xl'>
          <Image src='/images/logo.png' width={30} height={30} alt='logo' />
          CastingAfrica
        </h1>

        <nav>
          <ul className='hidden items-baseline justify-between space-x-12 md:flex'>
            {links.map(({ href, label }) => (
              <li
                key={label}
                className='flex flex-col items-center justify-center'
              >
                <UnstyledLink
                  href={href}
                  className={cn(
                    'nav-link font-gilroyMedium',
                    router.pathname === href && 'text-primary'
                  )}
                >
                  {label}
                </UnstyledLink>
                {router.pathname === href && (
                  <div className='bg-primary mt-1 h-2 w-2 rounded-full' />
                )}
              </li>
            ))}
          </ul>
        </nav>

        <Link href='/waitlist'>
          <span className='bg-primary hidden rounded-full px-5 py-3.5 md:inline-block'>
            Join Waitlist
          </span>
        </Link>

        {/* Mobile menu */}
        {/* 3 stripe menu icon */}
        <span className='flex justify-center rounded-full bg-gray-200 p-2 md:hidden'>
          <svg
            className='h-6 w-6 cursor-pointer md:hidden'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            onClick={() => toggleMenu(!showMenu)}
          >
            <path
              fillRule='evenodd'
              d='M3 5h18v2H3V5zm0 6h18v2H3v-2zm0 6h18v2H3v-2z'
            />
          </svg>
        </span>

        {showMenu && (
          <div className='absolute left-0 top-0 z-50 h-screen w-full bg-white p-4'>
            <div className='flex justify-end'>
              <svg
                className='h-6 w-6 cursor-pointer md:hidden'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                onClick={() => toggleMenu(!showMenu)}
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.657 16.243l-1.414 1.414L12 13.414l-4.243 4.243-1.414-1.414L10.586 12 6.343 7.757l1.414-1.414L12 10.586l4.243-4.243 1.414 1.414L13.414 12l4.243 4.243z'
                />
              </svg>
            </div>
            <div className='z-50 flex h-screen flex-col items-end justify-center'>
              <span className='text-slate-500'>NAVIGATE</span>
              <div className='mt-4 flex flex-col items-end justify-end space-y-10'>
                {links.map(({ href, label }) => (
                  <UnstyledLink
                    href={href}
                    className='text-center text-2xl font-bold'
                    key={label}
                  >
                    {label}
                  </UnstyledLink>
                ))}
              </div>
              <span className='my-3 mt-16 text-slate-500'>DOWNLOAD APP</span>
              <div className='mt-4 flex flex-col items-end gap-6'>
                <p className='text-2xl font-bold'>Google Play Store</p>
                <p className='text-2xl font-bold'>Apple App Store</p>
              </div>
              <Link
                href='/waitlist'
                className='bg-primary mt-36 w-full rounded-full px-5 py-3.5 text-center'
              >
                <span className='bg-primary mt-36 w-full rounded-full px-5 py-3.5 text-center'>
                  Join Waitlist
                </span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
