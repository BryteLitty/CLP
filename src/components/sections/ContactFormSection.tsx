import Image from 'next/image';
import React from 'react';

import ContactFormLayout from '@/components/layout/ContactFormLayout';

const ContactFormSection: React.FC = () => {
  return (
    <div className='container mx-auto my-24 px-3'>
      <div className='flex flex-col md:flex-row md:items-start md:justify-between md:space-x-24'>
        <div className='md:w-1/2'>
          <h1 className='text-primary'>LET'S CONNECT</h1>
          <h2 className='my-6 text-2xl font-bold md:text-4xl'>
            Drop us a message and we will get back to you ASAP
          </h2>
          <div className='my-8 flex flex-col space-y-10'>
            <div className='flex justify-start space-x-5'>
              <Image
                src='/images/icons/phone.svg'
                width={30}
                height={10}
                alt='phone'
              />
              <p className='text-2xl font-bold'>+233 505 9436 94</p>
            </div>

            <div className='flex justify-start space-x-5'>
              <Image
                src='/images/icons/whatsapp-black.svg'
                width={30}
                height={10}
                alt='phone'
              />
              <p className='text-2xl font-bold'>+233 502 1436 99</p>
            </div>

            <div className='flex justify-start space-x-5'>
              <Image
                src='/images/icons/email.svg'
                width={30}
                height={10}
                alt='whatsapp'
              />
              <p className='text-2xl font-bold'>info@casting.africa</p>
            </div>
          </div>
        </div>

        <div className='form md:w-1/2'>
          <ContactFormLayout />
        </div>
      </div>
    </div>
  );
};

export default ContactFormSection;
