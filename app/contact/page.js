import ContactHeroSection from '@/components/sections/contact/HeroSectionContact';
import Section1 from '@/components/sections/contact/Section1';
import Section2 from '@/components/sections/contact/Section2';

export const metadata = {
  title: 'Contact Us | اتصل بنا',
  description: 'Contact KASCOOM for industrial solutions in Saudi Arabia. Located in Jeddah. Phone: +966 56 732 0332. Email: info@kascoom.com. تواصل مع شركة كرسي الساعة للحلول الصناعية.',
  keywords: [
    'contact KASCOOM',
    'KASCOOM Jeddah',
    'industrial services contact',
    'اتصل بكرسي الساعة',
    'كرسي الساعة جدة',
  ],
  openGraph: {
    title: 'Contact Us - KASCOOM | اتصل بنا - كرسي الساعة',
    description: 'Get in touch with KASCOOM for industrial solutions',
    url: 'https://kascoom.com/contact',
  },
  alternates: {
    canonical: 'https://kascoom.com/contact',
  },
};

export default function Contact() {
  return (
    <main>
      <ContactHeroSection />
      <Section1 />
      <Section2 />
    </main>
  );
}
