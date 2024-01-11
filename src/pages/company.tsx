import Footer from '@/components/custom_pages/Footer';
import Navbar from '@/components/custom_pages/Navbar';
import AboutHeroSetion from '@/components/sections/AboutHeroSetion';
import AboutUsSection from '@/components/sections/AboutUsSection';
import PerformersSection from '@/components/sections/PerformersSection';
import TalentAgencySection from '@/components/sections/TalentAgencySection';
import TestimonialSection from '@/components/sections/TestimonialSection';

export default function AboutPage() {
  return (
    <div className='px-3'>
      <Navbar />
      <AboutHeroSetion />
      <AboutUsSection />
      <TalentAgencySection />
      <PerformersSection />
      <TestimonialSection />
      <Footer />
    </div>
  );
}
