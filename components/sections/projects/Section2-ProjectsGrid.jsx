'use client';

import { useState } from 'react';
import { Section } from '@/components/ui';
import {
  HardHat,
  Wrench,
  Droplet,
  Users
} from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';
import CivilContent from './grid/CivilContent';
import MechanicalContent from './grid/MechanicalContent';
import OilGasContent from './grid/OilGasContent';
import ManpowerContent from './grid/ManpowerContent';

const categoryConfig = [
  {
    id: 'civil',
    translationKey: 'civil',
    icon: HardHat,
    component: CivilContent
  },
  {
    id: 'mechanical',
    translationKey: 'mechanical',
    icon: Wrench,
    component: MechanicalContent
  },
  {
    id: 'oil-gas',
    translationKey: 'oilGas',
    icon: Droplet,
    component: OilGasContent
  },
  {
    id: 'manpower',
    translationKey: 'manpower',
    icon: Users,
    component: ManpowerContent
  }
];

export default function ProjectsGridSection() {
  const { tObj, language } = useTranslation();
  const categories = tObj('projects.categories') || {};
  const [activeCategory, setActiveCategory] = useState('civil');

  const ActiveComponent = categoryConfig.find(cat => cat.id === activeCategory)?.component;

  return (
    <Section className="pt-6 sm:pt-8 md:pt-10 pb-6 sm:pb-8 md:pb-10 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12">
          {categoryConfig.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.id;
            const categoryName = categories[category.translationKey]?.[language] || category.translationKey;

            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`
                  flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3
                  font-medium text-sm sm:text-base
                  transition-all duration-300
                  ${isActive
                    ? 'bg-[#f5a623] text-white shadow-lg scale-105'
                    : 'bg-white text-neutral-700 hover:bg-neutral-100 hover:shadow-md'
                  }
                `}
              >
                <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden sm:inline">{categoryName}</span>
                <span className="sm:hidden">{categoryName.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Content */}
        <div className="animate-fadeIn">
          {ActiveComponent && <ActiveComponent />}
        </div>
      </div>
    </Section>
  );
}
