import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

interface FormData {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
}

const ContactFormLayout: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const { name, email, phoneNumber, message } = data;

    const apiEndpoint = process.env.NEXT_PUBLIC_API_ENDPOINT;
    const response = await fetch(`${apiEndpoint}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, phoneNumber, message }),
    });

    if (response.ok) {
      toast.success('Message sent successfully');
      return;
    }
    toast.error('Message not sent');

    reset();
  };

  return (
    <div className=''>
      <form
        onSubmit={handleSubmit(onSubmit)}
        action=''
        className='contact-form w-full flex-col space-y-8 rounded-2xl px-6 py-10'
      >
        <div className='form-control'>
          <label htmlFor='name' className='ml-4 font-bold'>
            Name<sup className='text-red-500'>*</sup>
          </label>
          <input
            {...register('name', { required: true })}
            className='mt-2 block w-full rounded-2xl px-4 py-5'
            type='text'
            placeholder='Enter...'
          />
        </div>

        <div className='form-control'>
          <label htmlFor='email' className='ml-4 font-bold'>
            Email Address<sup className='text-red-500'>*</sup>
          </label>
          <input
            {...register('email', { required: true })}
            className='mt-2 block w-full rounded-2xl px-4 py-5'
            type='email'
            placeholder='Enter...'
          />
        </div>

        <div className='form-control'>
          <label htmlFor='phoneNumber' className='ml-4 font-bold'>
            Phone Number<sup className='text-red-500'>*</sup>
          </label>
          <input
            {...register('phoneNumber', { required: true })}
            className='mt-2 block w-full rounded-2xl px-4 py-5'
            type='number'
            placeholder='(+233)'
          />
        </div>

        <div className='form-control'>
          <label htmlFor='message' className='ml-4 font-bold'>
            Your Message<sup className='text-red-500'>*</sup>
          </label>
          <textarea
            {...register('message', { required: true })}
            className='mt-2 block w-full rounded-2xl px-4 py-5'
            placeholder='Enter your message...'
            style={{ height: '130px' }}
          />
        </div>

        <button
          type='submit'
          className='bg-primary text white w-full rounded-3xl px-6 py-3 md:w-auto'
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactFormLayout;
