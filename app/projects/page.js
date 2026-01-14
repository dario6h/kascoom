import ProjectsHeroSection from '@/components/sections/projects/HeroSection';
import ProjectExperienceSection from '@/components/sections/projects/Section1-ProjectExperience';
import ProjectsGridSection from '@/components/sections/projects/Section2-ProjectsGrid';

export const metadata = {
  title: 'Projects | مشاريعنا',
  description: 'Explore KASCOOM completed projects in oil & gas, civil construction, mechanical works across Saudi Arabia. استكشف مشاريع كرسي الساعة في النفط والغاز والبناء المدني.',
  keywords: [
    'KASCOOM projects',
    'industrial projects Saudi Arabia',
    'oil gas projects KSA',
    'civil construction projects',
    'مشاريع كرسي الساعة',
    'مشاريع صناعية',
  ],
  openGraph: {
    title: 'Projects - KASCOOM | مشاريعنا - كرسي الساعة',
    description: 'Explore our completed industrial projects across Saudi Arabia',
    url: 'https://kascoom.com/projects',
  },
  alternates: {
    canonical: 'https://kascoom.com/projects',
  },
};

export default function Projects() {
  return (
    <>
      <ProjectsHeroSection />
      <ProjectExperienceSection />
      <ProjectsGridSection />
    </>
  );
}
