'use client';

import Link from 'next/link';
import { Section } from '@/components/ui';
import { ArrowRight, MapPin, Building2, Users, Check, ExternalLink } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

export default function OurWorks() {
  const { t, tObj, language } = useTranslation();
  const projects = tObj('projects.items')?.filter(p => p.featured) || [];

  return (
    <Section className="py-6 md:py-8 lg:py-10">
      <div>

        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-6 sm:mb-8 md:mb-10 gap-4 sm:gap-0">
          <div>
            <p className="text-neutral-600 text-sm sm:text-base md:text-lg tracking-wide mb-2 sm:mb-3 font-medium">{t('about.ourWorks.label')}</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-neutral-800 relative inline-block pb-2 sm:pb-3">
              {t('about.ourWorks.title')}
              <div className="absolute bottom-0 left-0 right-0 w-full h-0.5 sm:h-1" style={{ backgroundColor: '#f5a623' }}></div>
            </h2>
          </div>
          <Link
            href="/projects"
            className="hidden md:flex items-center gap-2 text-neutral-700 hover:text-neutral-900 transition-colors duration-200 ease-out group font-medium touch-manipulation"
          >
            <span>{t('about.ourWorks.moreProjects')}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200 ease-out" />
          </Link>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-6">
          {projects.map((project) => (
            <Link
              key={project.id}
              href="/projects"
              className="h-full"
            >
              <div className="group cursor-pointer h-full touch-manipulation flex flex-col">
                {/* Image Container */}
                <div
                  className="relative aspect-[4/3] overflow-hidden shadow-md rounded-sm"
                  style={{
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundColor: '#e5e7eb'
                  }}
                >
                  {/* Hover Overlay with Icon */}
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-500 ease-in-out flex items-center justify-center">
                    <ExternalLink className="w-8 h-8 sm:w-10 sm:h-10 text-white scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 ease-in-out" />
                  </div>

                  {/* Thick Bottom Border */}
                  <div className="absolute bottom-0 left-0 right-0 h-1.5" style={{ backgroundColor: '#f5a623' }}></div>
                </div>

                {/* Project Info */}
                <div className="mt-3 bg-white p-4 sm:p-5 rounded-sm shadow-md space-y-3 sm:space-y-4 flex-grow">
                  {/* Title */}
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold text-neutral-800 leading-tight">
                    {project.title[language]}
                  </h3>

                  {/* Company, Client, Location */}
                  <div className="space-y-2">
                    {/* Company */}
                    <div className="flex items-start gap-2 text-neutral-600 text-xs sm:text-sm">
                      <Building2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#f5a623' }} />
                      <span className="leading-snug">{project.company[language]}</span>
                    </div>
                    {/* Client */}
                    <div className="flex items-start gap-2 text-neutral-600 text-xs sm:text-sm">
                      <Users className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#f5a623' }} />
                      <span className="leading-snug">{project.client[language]}</span>
                    </div>
                    {/* Location */}
                    <div className="flex items-start gap-2 text-neutral-600 text-xs sm:text-sm">
                      <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#f5a623' }} />
                      <span className="leading-snug">{project.location[language]}</span>
                    </div>
                  </div>

                  {/* Key Scope Section */}
                  {project.scope && project.scope.length > 0 && (
                    <div className="pt-2 border-t border-neutral-100">
                      <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-2">
                        {language === 'ar' ? 'نطاق العمل' : 'Key Scope'}
                      </p>
                      <ul className="space-y-1.5">
                        {project.scope.map((item, index) => (
                          <li key={index} className="flex items-start gap-2 text-neutral-600 text-xs sm:text-sm">
                            <Check
                              className="w-4 h-4 flex-shrink-0 mt-0.5"
                              style={{ color: '#f5a623' }}
                              strokeWidth={2.5}
                            />
                            <span className="leading-snug">{item[language]}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile "More Projects" Button */}
        <div className="mt-8 sm:mt-10 flex justify-center md:hidden">
          <Link
            href="/projects"
            className="flex items-center gap-2 px-6 py-3 text-neutral-700 hover:text-neutral-900 transition-colors duration-200 ease-out group font-medium touch-manipulation"
          >
            <span>{t('about.ourWorks.moreProjects')}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200 ease-out" />
          </Link>
        </div>
      </div>
    </Section>
  );
}
