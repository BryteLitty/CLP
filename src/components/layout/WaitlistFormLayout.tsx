import Image from 'next/image';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const WaitlistFormLayout: React.FC = () => {
  const [name, setName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [activeForm, setActiveForm] = useState<'talent' | 'creator'>('talent');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = { name, email: emailAddress, phoneNumber };

    toast.success('Form submitted successfully!');

    return formData;
  };

  return (
    <div className='md:w-2/3'>
      <form
        onSubmit={handleSubmit}
        action=''
        className='contact-form w-full flex-col space-y-8 rounded-2xl px-6 py-10'
      >
        <p className='m-0'>Join as:</p>
        <div className='flex items-center justify-center'>
          <div
            onClick={() => setActiveForm('talent')}
            className={`flex w-1/2 cursor-pointer items-center justify-center space-x-2 pb-5 text-center text-2xl font-bold ${
              activeForm === 'talent' ? 'border-b-8' : ''
            }`}
          >
            <h1>Talent</h1>
            <Image
              src='/images/icons/start.svg'
              width={20}
              height={0}
              alt='start'
            />
          </div>

          <div
            onClick={() => setActiveForm('creator')}
            className={`flex w-1/2 cursor-pointer items-center justify-center space-x-2 pb-5 text-center text-2xl font-bold ${
              activeForm === 'creator' ? 'border-b-8' : ''
            }`}
          >
            <h1>Creator</h1>
            <Image
              src='/images/icons/video.svg'
              width={20}
              height={0}
              alt='start'
            />
          </div>
        </div>

        {/* FORMS */}
        {/* Talent Form */}
        {activeForm === 'talent' && (
          <>
            <div className='form-control'>
              <label htmlFor='email' className='ml-4 font-bold'>
                Full Name<sup className='text-red-500'>*</sup>
              </label>
              <input
                className='mt-2 block w-full rounded-2xl px-4 py-5'
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Enter...'
              />
            </div>

            <div className='form-control'>
              <label htmlFor='email' className='ml-4 font-bold'>
                Email Address<sup className='text-red-500'>*</sup>
              </label>
              <input
                className='mt-2 block w-full rounded-2xl px-4 py-5'
                type='email'
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
                placeholder='Enter...'
              />
            </div>

            <div className='form-control'>
              <label htmlFor='email' className='ml-4 font-bold'>
                Phone Number<sup className='text-red-500'>*</sup>
              </label>
              <input
                className='mt-2 block w-full rounded-2xl px-4 py-5'
                type='number'
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder='(+233)'
              />
            </div>

            <button
              type='submit'
              className='bg-primary text white w-full rounded-3xl px-6 py-3 md:w-auto'
            >
              Join Waitlist
            </button>
          </>
        )}

        {activeForm === 'creator' && (
          <>
            <div className='form-control'>
              <label htmlFor='email' className='ml-4 font-bold'>
                Full Name<sup className='text-red-500'>*</sup>
              </label>
              <input
                className='mt-2 block w-full rounded-2xl px-4 py-5'
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Enter...'
              />
            </div>

            <div className='form-control'>
              <label htmlFor='email' className='ml-4 font-bold'>
                Email Address<sup className='text-red-500'>*</sup>
              </label>
              <input
                className='mt-2 block w-full rounded-2xl px-4 py-5'
                type='email'
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
                placeholder='Enter...'
              />
            </div>

            <div className='form-control'>
              <label htmlFor='email' className='ml-4 font-bold'>
                Phone Number<sup className='text-red-500'>*</sup>
              </label>
              <input
                className='mt-2 block w-full rounded-2xl px-4 py-5'
                type='number'
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder='(+233)'
              />
            </div>

            <button
              type='submit'
              className='bg-primary text white rounded-3xl px-6 py-3'
            >
              Join Waitlist
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default WaitlistFormLayout;
