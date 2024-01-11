import * as React from 'react';

import Footer from '@/components/custom_pages/Footer';
import FaqSection from '@/components/sections/FaqSection';
import FeaturedJobSection from '@/components/sections/FeaturedJobSection';
import HeroSection from '@/components/sections/HeroSection';
import PartnerSection from '@/components/sections/PartnerSection';
import ProcessSection from '@/components/sections/ProcessSection';
import SpotlightSection from '@/components/sections/SpotlightSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PartnerSection />
      <ProcessSection />
      <SpotlightSection />
      <FeaturedJobSection />
      <FaqSection />
      <Footer />
    </>
  );
}
