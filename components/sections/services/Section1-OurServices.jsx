'use client';

import { Section } from '@/components/ui';
import { useTranslation } from '@/hooks/useTranslation';

export default function OurServicesSection() {
  const { t } = useTranslation();

  return (
    <Section className="pt-6 sm:pt-8 md:pt-10 pb-6 sm:pb-8 md:pb-10">
      <div>
        {/* Section Title */}
        <div className="mb-0 max-w-4xl mx-auto">
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-wide text-neutral-800 relative inline-block pb-2 sm:pb-3">
              {t('services.ourServices.title')}
              <div className="absolute bottom-0 left-0 right-0 w-full h-0.5 sm:h-1" style={{ backgroundColor: '#f5a623' }}></div>
            </h2>
          </div>

          {/* Description Paragraph */}
          <p className="text-neutral-700 text-sm sm:text-base md:text-lg leading-relaxed mt-5 sm:mt-6 md:mt-7 text-center">
            {t('services.ourServices.description')}
          </p>
        </div>
      </div>
    </Section>
  );
}
