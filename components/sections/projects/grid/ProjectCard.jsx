'use client';

import { useState } from 'react';
import Image from 'next/image';
import { MapPin, Building2, ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

// Labels for card fields
const labels = {
  client: { en: 'Client:', ar: 'العميل:' },
  mainContractor: { en: 'Main Contractor:', ar: 'المقاول الرئيسي:' },
  scopeOfWork: { en: 'Scope of Work:', ar: 'نطاق العمل:' },
  showMore: { en: 'Show More', ar: 'عرض المزيد' },
  showLess: { en: 'Show Less', ar: 'عرض أقل' }
};

export default function ProjectCard({ project }) {
  const { language } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);

  // Get translated content
  const title = project.title[language] || project.title.en;
  const client = project.client[language] || project.client.en;
  const mainContractor = project.mainContractor ? (project.mainContractor[language] || project.mainContractor.en) : null;
  const location = project.location[language] || project.location.en;
  const scope = project.scope.map(item => item[language] || item.en);

  const visibleScope = isExpanded ? scope : scope.slice(0, 3);
  const hasMoreItems = scope.length > 3;

  return (
    <div className="bg-white shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      {/* Project Image */}
      <div className="relative h-48 sm:h-52 bg-gray-200">
        <Image
          src={project.image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Project Details */}
      <div className="p-5">
        {/* Title */}
        <h3 className="text-lg sm:text-xl font-semibold text-neutral-800 mb-3">
          {title}
        </h3>

        {/* Client & Contractor Info */}
        <div className="space-y-2 mb-4">
          <div className="flex items-start text-sm text-neutral-600">
            <Building2 className="w-4 h-4 mr-2 mt-0.5 text-[#f5a623] flex-shrink-0" />
            <div>
              <span className="font-medium">{labels.client[language]}</span> {client}
            </div>
          </div>

          {mainContractor && (
            <div className="flex items-start text-sm text-neutral-600">
              <Building2 className="w-4 h-4 mr-2 mt-0.5 text-[#f5a623] flex-shrink-0" />
              <div>
                <span className="font-medium">{labels.mainContractor[language]}</span> {mainContractor}
              </div>
            </div>
          )}

          <div className="flex items-center text-sm text-neutral-600">
            <MapPin className="w-4 h-4 mr-2 text-[#f5a623] flex-shrink-0" />
            {location}
          </div>
        </div>

        {/* Scope of Work */}
        <div className="mb-3">
          <h4 className="text-sm font-semibold text-neutral-800 mb-2">{labels.scopeOfWork[language]}</h4>
          <ul className="space-y-1.5">
            {visibleScope.map((item, index) => (
              <li key={index} className="flex items-start text-sm text-neutral-700">
                <span className="text-[#f5a623] mr-2 flex-shrink-0">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Expand/Collapse Button */}
        {hasMoreItems && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center text-sm text-[#f5a623] hover:text-[#d89420] font-medium transition-colors"
          >
            {isExpanded ? (
              <>
                <ChevronUp className="w-4 h-4 mr-1" />
                {labels.showLess[language]}
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4 mr-1" />
                {labels.showMore[language]}
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
}
