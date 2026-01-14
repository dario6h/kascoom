'use client';

import ServicesHeroSection from '@/components/sections/services/HeroSection';
import OurServicesSection from '@/components/sections/services/Section1-OurServices';
import ServicesCards from '@/components/sections/services/ServicesCards';
import ServicesTabsSection from '@/components/sections/services/Section2-ServicesTabs';

export default function ServicesClient() {
  return (
    <div className="min-h-screen">
      <ServicesHeroSection />
      <OurServicesSection />
      <ServicesCards />
      <ServicesTabsSection />
    </div>
  );
}
