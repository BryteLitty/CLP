import React from 'react';

interface EmailTemplateProps {
  email: string;
  name: string;
  message: string;
  phoneNumber: string;
}

const ContactUsTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  email,
  name,
  message,
  phoneNumber,
}) => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='text-center'>New Message</h1>
      <p className='text-center'>You have a new message from your website.</p>
      <p className='text-center'>Please see details below:</p>
      <div className='flex flex-col items-center justify-center'>
        <p className='text-center'>Name: {name}</p>
        <p className='text-center'>Email: {email}</p>
        <p className='text-center'>Contact Number: {phoneNumber}</p>
        <p className='text-center'>Message: {message}</p>
      </div>
    </div>
  );
};

export default ContactUsTemplate;
