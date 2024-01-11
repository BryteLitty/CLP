import React from 'react';
import { Toaster } from 'react-hot-toast';

import Footer from '@/components/custom_pages/Footer';
import Navbar from '@/components/custom_pages/Navbar';
import ContactHeroSection from '@/components/sections/ContactHeroSection';
import WaitlistConnectSection from '@/components/sections/WaitlistConnectSection';

const WaitlistPage: React.FC = () => {
  return (
    <div>
      <Toaster position='top-right' toastOptions={{ duration: 3000 }} />
      <Navbar />
      <ContactHeroSection
        title='Join WaitList'
        description='You can join our pool of talent and content creators. Applications are evaluated as they come, so join the waitlist today.'
        imageSrc='/images/others/girl-flex.png'
        style={{ backgroundColor: '#FF7A01', color: 'white' }}
      />
      <WaitlistConnectSection />
      <Footer />
    </div>
  );
};

export default WaitlistPage;
