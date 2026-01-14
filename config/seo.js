/**
 * SEO Configuration
 *
 * Central configuration for SEO metadata across the website.
 * Used in: Layout, page metadata, OpenGraph tags
 */

export const siteConfig = {
  name: 'KASCOOM',
  title: 'KASCOOM - Engineering & Construction Solutions',
  description:
    'ARAMCO-approved engineering and construction company specializing in Civil, Mechanical, Electrical, and Oil & Gas projects in Saudi Arabia.',
  url: 'https://kascoom.com', // Update with actual domain
  ogImage: '/images/og-image.png', // Update with actual OG image
  keywords: [
    'ARAMCO approved',
    'engineering services',
    'construction Saudi Arabia',
    'mechanical engineering',
    'oil and gas',
    'petrochemical',
    'fabrication services',
    'KASCOOM',
  ],
};

/**
 * Page-specific metadata
 */
export const pageMetadata = {
  home: {
    title: 'KASCOOM - Engineering & Construction Solutions',
    description:
      'ARAMCO-approved vendor delivering excellence in Civil, Mechanical, Electrical, and Oil & Gas engineering projects across Saudi Arabia.',
  },
  services: {
    title: 'Our Services - KASCOOM',
    description:
      'Comprehensive engineering and construction solutions including fabrication, erection, maintenance, and shutdown support.',
  },
  projects: {
    title: 'Our Projects - KASCOOM',
    description:
      'Explore our portfolio of successful engineering projects including JIZAN IGCC, KAUST University, SADAF Petrochemical, and more.',
  },
  contact: {
    title: 'Contact Us - KASCOOM',
    description:
      'Get in touch with our team of ARAMCO-approved engineers and project managers.',
  },
};

/**
 * Generate metadata for Next.js pages
 */
export const generateMetadata = (page = 'home') => {
  const meta = pageMetadata[page] || pageMetadata.home;

  return {
    title: meta.title,
    description: meta.description,
    keywords: siteConfig.keywords,
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: siteConfig.url,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: [siteConfig.ogImage],
    },
  };
};

export default siteConfig;
