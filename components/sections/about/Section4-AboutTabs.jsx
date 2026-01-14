'use client';

import { useState, useMemo } from 'react';
import { Check } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

// Brand colors
const BRAND_ORANGE = '#f5a623';
const NEUTRAL_LIGHT = '#f5f5f5';

// Tab images
const tabImages = {
  history: '/images/about/history-bg.png',
  vision: '/images/about/vision-bg.png',
  experience: '/images/about/experience-bg.png'
};

// Reusable Components
const SectionHeading = ({ children }) => (
  <h2 className="text-lg sm:text-xl md:text-2xl font-semibold tracking-wide text-neutral-800 relative inline-block pb-1.5 sm:pb-2 mb-4 sm:mb-5 md:mb-6">
    {children}
    <div className="absolute bottom-0 left-0 right-0 w-full h-0.5" style={{ backgroundColor: BRAND_ORANGE }} />
  </h2>
);

const ContentParagraph = ({ children, className = '' }) => (
  <p className={`text-neutral-700 text-sm sm:text-base md:text-lg leading-relaxed ${className}`}>
    {children}
  </p>
);

const TimelineItem = ({ year, title, description, isLast }) => (
  <li className={`${isLast ? '' : 'mb-4'} ml-5`}>
    {/* Timeline Dot */}
    <div
      className="absolute w-2.5 h-2.5 rounded-full mt-1 -left-[6px] border-2 border-white"
      style={{ backgroundColor: BRAND_ORANGE }}
    />

    {/* Year Badge */}
    <div
      className="inline-block px-2 py-0.5 mb-1"
      style={{ backgroundColor: 'rgba(245, 166, 35, 0.15)' }}
    >
      <time className="text-xs sm:text-sm font-semibold text-neutral-700">
        {year}
      </time>
    </div>

    {/* Event Title */}
    <h3 className="text-sm sm:text-base font-semibold text-neutral-800 mb-1">
      {title}
    </h3>

    {/* Event Description - Smaller font for timeline */}
    <p className="text-neutral-700 text-xs sm:text-sm md:text-base leading-relaxed">
      {description}
    </p>
  </li>
);

const TabButton = ({ tab, isActive, onClick }) => (
  <button
    onClick={onClick}
    className="group flex items-center gap-3 md:gap-4 py-3 sm:py-4 md:py-6 pl-4 sm:pl-6 md:pl-10 pr-4 sm:pr-6 md:pr-10 text-left transition-all duration-300 touch-manipulation min-h-[60px]"
    style={{
      backgroundColor: isActive ? 'rgba(245, 166, 35, 0.3)' : 'transparent'
    }}
  >
    {/* Check Icon Circle */}
    <div
      className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300"
      style={{
        borderColor: isActive ? NEUTRAL_LIGHT : BRAND_ORANGE
      }}
    >
      <Check
        className="w-5 h-5 md:w-6 md:h-6 transition-colors duration-300"
        style={{ color: isActive ? NEUTRAL_LIGHT : BRAND_ORANGE }}
        strokeWidth={2.5}
      />
    </div>

    {/* Tab Labels */}
    <div className="flex flex-col gap-0.5">
      <span
        className="text-sm sm:text-base md:text-lg font-semibold tracking-wide transition-colors duration-300 leading-tight"
        style={{ color: isActive ? NEUTRAL_LIGHT : BRAND_ORANGE }}
      >
        {tab.title}
      </span>
      <span
        className="text-xs md:text-sm font-normal transition-colors duration-300"
        style={{ color: isActive ? NEUTRAL_LIGHT : BRAND_ORANGE }}
      >
        {tab.subtitle}
      </span>
    </div>
  </button>
);

// Tab Content Components
const HistoryContent = ({ data, language }) => (
  <div>
    <SectionHeading>{data.title[language]}</SectionHeading>
    <ol className="relative border-l-2 border-neutral-300">
      {data.timeline.map((event, index) => (
        <TimelineItem
          key={event.year}
          year={event.year}
          title={event.title[language]}
          description={event.description[language]}
          isLast={index === data.timeline.length - 1}
        />
      ))}
    </ol>
  </div>
);

const VisionContent = ({ data, language }) => (
  <div>
    <SectionHeading>{data.title[language]}</SectionHeading>
    <ContentParagraph className="mb-4">
      {data.description[language]}
    </ContentParagraph>
    <ContentParagraph>
      {data.additionalText[language]}
    </ContentParagraph>
  </div>
);

const ExperienceContent = ({ data, language }) => (
  <div>
    <SectionHeading>{data.title[language]}</SectionHeading>
    <ContentParagraph className="mb-4">
      {data.description1[language]}
    </ContentParagraph>
    <ContentParagraph>
      {data.description2[language]}
    </ContentParagraph>
  </div>
);

// Main Component
export default function AboutTabs() {
  const { tObj, language } = useTranslation();
  const tabsData = tObj('about.tabs') || {};

  const [activeTab, setActiveTab] = useState('history');

  const tabs = [
    { id: 'history', title: tabsData.history?.title[language], subtitle: tabsData.history?.subtitle[language], image: tabImages.history },
    { id: 'vision', title: tabsData.vision?.title[language], subtitle: tabsData.vision?.subtitle[language], image: tabImages.vision },
    { id: 'experience', title: tabsData.experience?.title[language], subtitle: tabsData.experience?.subtitle[language], image: tabImages.experience }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'history':
        return <HistoryContent data={tabsData.history} language={language} />;
      case 'vision':
        return <VisionContent data={tabsData.vision} language={language} />;
      case 'experience':
        return <ExperienceContent data={tabsData.experience} language={language} />;
      default:
        return null;
    }
  };

  return (
    <section className="pt-6 md:pt-8 lg:pt-10 overflow-hidden">
      <div className="grid md:grid-cols-2 gap-0 min-h-[400px] sm:min-h-[480px] md:min-h-[520px] w-full">

        {/* Left Panel - Tab Navigation with Background */}
        <div className="relative min-h-[400px] sm:min-h-[480px] md:min-h-0 overflow-hidden">

          {/* Background Images with Cross-Fade Effect */}
          {tabs.map((tab) => (
            <div
              key={`bg-${tab.id}`}
              className="absolute inset-0 transition-opacity duration-500 ease-in-out"
              style={{
                backgroundImage: `url(${tab.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: activeTab === tab.id ? 1 : 0
              }}
            />
          ))}

          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Tab Navigation Buttons */}
          <div className="relative z-10 flex flex-col justify-center h-full py-6 sm:py-8 space-y-1 sm:space-y-2 ml-auto w-fit max-w-full">
            {tabs.map((tab) => (
              <TabButton
                key={tab.id}
                tab={tab}
                isActive={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
              />
            ))}
          </div>
        </div>

        {/* Right Panel - Tab Content */}
        <div className="flex flex-col justify-center p-6 sm:p-8 md:p-12 lg:p-16 min-h-[280px] sm:min-h-[320px] md:min-h-[200px] bg-white">
          {renderContent()}
        </div>

      </div>
    </section>
  );
}
