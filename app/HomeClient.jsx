'use client';

import HeroSlideshow from '@/components/sections/about/Section1-HeroSlideshow';
import StatsSection from '@/components/sections/about/Section2-Stats';
import CompanyExperienceSection from '@/components/sections/about/Section2.5-CompanyExperience';
import OurWorks from '@/components/sections/about/Section3-OurWorks';
import AboutTabs from '@/components/sections/about/Section4-AboutTabs';
import ClientsSection from '@/components/sections/about/Section5-Clients';
import WhatWeOfferSection from '@/components/sections/about/Section6-WhatWeOffer';
import CTASection from '@/components/sections/about/Section7-CTA';

export default function HomeClient() {
  return (
    <div className="min-h-screen">
      <HeroSlideshow />
      <StatsSection />
      <CompanyExperienceSection />
      <OurWorks />
      <AboutTabs />
      <ClientsSection />
      <WhatWeOfferSection />
      <CTASection />
    </div>
  );
}
