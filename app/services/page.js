import ServicesClient from './ServicesClient';

export const metadata = {
  title: 'Services | خدماتنا',
  description: 'KASCOOM provides comprehensive industrial services including oil & gas, civil construction, mechanical works, and manpower solutions in Saudi Arabia. خدمات النفط والغاز والبناء المدني والأعمال الميكانيكية.',
  keywords: [
    'industrial services Saudi Arabia',
    'oil and gas services',
    'civil construction',
    'mechanical works',
    'manpower solutions',
    'خدمات صناعية',
    'خدمات النفط والغاز',
  ],
  openGraph: {
    title: 'Services - KASCOOM | خدماتنا - كرسي الساعة',
    description: 'Comprehensive industrial services in Saudi Arabia',
    url: 'https://kascoom.com/services',
  },
  alternates: {
    canonical: 'https://kascoom.com/services',
  },
};

export default function Services() {
  return <ServicesClient />;
}
