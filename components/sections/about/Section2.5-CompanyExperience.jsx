'use client';

import { Section } from '@/components/ui';
import Image from 'next/image';
import { useTranslation } from '@/hooks/useTranslation';

export default function CompanyExperienceSection() {
  const { tObj, language } = useTranslation();
  const content = tObj('about.companyExperience') || {};

  return (
    <Section className="pt-6 sm:pt-8 md:pt-10 pb-6 sm:pb-8 md:pb-10">
      <div>
        {/* Section Title */}
        <div className="mb-0 max-w-4xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-neutral-800 relative inline-block pb-2 sm:pb-3">
              {content.title?.[language]}
              <div className="absolute bottom-0 left-0 right-0 w-full h-0.5 sm:h-1" style={{ backgroundColor: '#f5a623' }}></div>
            </h2>
          </div>

          {/* Description Paragraph */}
          <p className="text-neutral-700 text-base sm:text-lg md:text-xl leading-relaxed mt-5 sm:mt-6 md:mt-7 text-center">
            {content.descriptionPart1?.[language]}{' '}
            <Image
              src="/images/saudi-aramco-logo.png"
              alt="Saudi Aramco"
              width={80}
              height={18}
              className="inline mx-1"
              style={{ verticalAlign: 'middle', transform: 'translateY(-2px)' }}
            />{' '}
            {content.descriptionPart2?.[language]}
          </p>
        </div>
      </div>
    </Section>
  );
}
