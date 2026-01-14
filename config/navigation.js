/**
 * Navigation Configuration
 *
 * Central configuration for all navigation links across the website.
 * Used in: Navbar, Footer, Sitemap
 */

export const navigationLinks = [
  {
    id: 'about',
    label: {
      en: 'About',
      ar: 'عن الشركة',
    },
    href: '/',
    external: false,
  },
  {
    id: 'services',
    label: {
      en: 'Services',
      ar: 'الخدمات',
    },
    href: '/services',
    external: false,
  },
  {
    id: 'projects',
    label: {
      en: 'Projects',
      ar: 'المشاريع',
    },
    href: '/projects',
    external: false,
  },
  {
    id: 'contact',
    label: {
      en: 'Contact',
      ar: 'اتصل بنا',
    },
    href: '/contact',
    external: false,
  },
];

/**
 * Footer navigation (can include additional links)
 */
export const footerLinks = {
  company: [
    { label: { en: 'About Us', ar: 'عن الشركة' }, href: '/' },
    { label: { en: 'Our Services', ar: 'خدماتنا' }, href: '/services' },
    { label: { en: 'Projects', ar: 'المشاريع' }, href: '/projects' },
    { label: { en: 'Contact', ar: 'اتصل بنا' }, href: '/contact' },
  ],
  // Future: social media, legal links, etc.
};

/**
 * Social media links
 */
export const socialLinks = [
  // { platform: 'linkedin', url: 'https://linkedin.com/company/kascoom', icon: 'LinkedIn' },
  // { platform: 'twitter', url: 'https://twitter.com/kascoom', icon: 'Twitter' },
  // Future implementation
];

export default navigationLinks;
