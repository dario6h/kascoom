'use client';

import { useState } from 'react';
import { Section } from '@/components/ui';
import {
  Wrench,
  Cog,
  Building2,
  Settings,
  Users,
  ShoppingCart,
  Truck,
  Drill,
  Check
} from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const tabIcons = {
  engineering: Drill,
  mechanical: Cog,
  civil: Building2,
  maintenance: Settings,
  manpower: Users,
  trading: ShoppingCart,
  transport: Truck,
  fabrication: Wrench
};

const tabIds = ['engineering', 'mechanical', 'civil', 'maintenance', 'manpower', 'trading', 'transport', 'fabrication'];

// Generic Tab Content Component
const TabContent = ({ data, language }) => {
  if (!data) return null;

  return (
    <div className="space-y-6">
      {/* Section Heading */}
      <div>
        <h2 className="text-xl sm:text-2xl font-semibold text-neutral-800 pb-2 border-b-2 inline-block" style={{ borderColor: '#f5a623' }}>
          {data.title[language]}
        </h2>
      </div>

      {/* Description */}
      <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
        {data.description[language]}
      </p>

      {/* Technical Features List */}
      <ul className="space-y-3">
        {data.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3 text-neutral-600 text-sm sm:text-base">
            <Check
              className="w-5 h-5 flex-shrink-0 mt-0.5"
              style={{ color: '#f5a623' }}
              strokeWidth={2.5}
            />
            <span className="leading-relaxed">{feature[language]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function ServicesTabsSection() {
  const [activeTab, setActiveTab] = useState('engineering');
  const { tObj, language } = useTranslation();
  const tabsData = tObj('services.tabs') || {};

  const serviceTabs = tabIds.map(id => ({
    id,
    label: tabsData[id]?.label[language] || id,
    icon: tabIcons[id],
    data: tabsData[id]
  }));

  const activeTabData = tabsData[activeTab];

  return (
    <Section className="pt-6 sm:pt-8 md:pt-10 pb-12 sm:pb-14 md:pb-16 lg:pb-20">
      <div>
        {/* Tab Layout - Sidebar + Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {/* Left Sidebar - Tabs */}
          <div className="md:col-span-4 lg:col-span-3">
            <div className="bg-white rounded-sm shadow-md overflow-hidden">
              {serviceTabs.map((tab, index) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;

                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`
                      w-full px-4 py-4 sm:py-5 flex items-center gap-3
                      transition-all duration-300 touch-manipulation
                      border-b border-neutral-100
                      ${isActive
                        ? 'text-white font-semibold'
                        : 'text-neutral-700 hover:bg-neutral-50'
                      }
                      ${index === serviceTabs.length - 1 ? 'border-b-0' : ''}
                    `}
                    style={{
                      backgroundColor: isActive ? '#f5a623' : 'transparent'
                    }}
                    aria-label={`View ${tab.label} services`}
                  >
                    <Icon
                      className={`w-5 h-5 flex-shrink-0 ${
                        isActive ? 'text-white' : 'text-neutral-600'
                      }`}
                      strokeWidth={2}
                    />
                    <span className="text-left text-sm leading-tight">
                      {tab.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Content Area */}
          <div className="md:col-span-8 lg:col-span-9">
            <div className="p-6 sm:p-8 md:p-10 min-h-[400px]">
              {activeTabData && <TabContent data={activeTabData} language={language} />}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
