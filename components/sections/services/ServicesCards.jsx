'use client';

import { Section } from '@/components/ui';
import { Check } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

export default function ServicesCards() {
  const { tObj, language } = useTranslation();
  const servicesData = tObj('services.cards') || [];

  return (
    <Section className="pt-8 sm:pt-10 md:pt-12 pb-6 sm:pb-8 md:pb-10">
      <div>
        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-6">
          {servicesData.map((service) => (
            <div key={service.id} className="group h-full">
              {/* Image Container */}
              <div
                className="relative aspect-[4/3] overflow-hidden shadow-md rounded-sm"
                style={{
                  backgroundImage: `url(${service.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundColor: '#e5e7eb' // Fallback gray for missing images
                }}
              >
                {/* Thick Bottom Border */}
                <div className="absolute bottom-0 left-0 right-0 h-1.5" style={{ backgroundColor: '#f5a623' }}></div>
              </div>

              {/* Service Info */}
              <div className="mt-3 bg-white p-4 sm:p-5 rounded-sm shadow-md space-y-3 sm:space-y-4">
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-neutral-800 leading-tight">
                  {service.title[language]}
                </h3>

                {/* Features List with Check Icons */}
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-neutral-600 text-xs sm:text-sm">
                      <Check
                        className="w-4 h-4 flex-shrink-0 mt-0.5"
                        style={{ color: '#f5a623' }}
                        strokeWidth={2.5}
                      />
                      <span className="leading-snug">{feature[language]}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
