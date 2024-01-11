import React from 'react';
import { Toaster } from 'react-hot-toast';

import Footer from '@/components/custom_pages/Footer';
import Navbar from '@/components/custom_pages/Navbar';
import ContactFormSection from '@/components/sections/ContactFormSection';
import ContactHeroSection from '@/components/sections/ContactHeroSection';

const ContactPage: React.FC = () => {
  return (
    <div>
      <Toaster position='top-right' toastOptions={{ duration: 3000 }} />
      <Navbar />
      <ContactHeroSection
        title='The Future of Casting is Here'
        description='Using technology we are pioneering the new age of creative recruitment in Africa. '
        imageSrc='/images/others/guy-flex.png'
      />
      <ContactFormSection />
      <Footer />
    </div>
  );
};

export default ContactPage;
