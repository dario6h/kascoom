'use client';

import { Section } from '@/components/ui';
import {
  CheckCircle,
  Cog,
  Award,
  Wrench,
  Package,
  ShieldCheck
} from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

// Icons mapping by offering id
const iconMap = {
  aramco: CheckCircle,
  integrated: Cog,
  certified: Award,
  fabrication: Wrench,
  machining: Package,
  hseq: ShieldCheck
};

export default function WhatWeOfferSection() {
  const { t, tObj, language } = useTranslation();
  const offerings = tObj('about.whatWeOffer.offerings') || [];

  return (
    <Section className="py-12 sm:py-14 md:py-16 lg:py-20 xl:py-24">
      <div>
        {/* Section Title */}
        <div className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-wide text-neutral-800 relative inline-block pb-2 sm:pb-3">
            {t('about.whatWeOffer.title')}
            <div className="absolute bottom-0 left-0 right-0 w-full h-0.5 sm:h-1" style={{ backgroundColor: '#f5a623' }}></div>
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8 lg:gap-10">
          {offerings.map((offering, index) => {
            const Icon = iconMap[offering.id] || CheckCircle;
            return (
              <div
                key={offering.id || index}
                className="flex flex-col items-start gap-3 sm:gap-4 p-4 sm:p-0"
              >
                {/* Icon Circle */}
                <div
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#f5a623' }}
                >
                  <Icon
                    className="w-7 h-7 sm:w-8 sm:h-8 text-white"
                    strokeWidth={2}
                  />
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold text-neutral-800 leading-tight">
                    {offering.title[language]}
                  </h3>
                  <p className="text-neutral-600 text-xs sm:text-sm md:text-sm leading-relaxed">
                    {offering.description[language]}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
