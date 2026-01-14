/**
 * Dynamic Sitemap for KASCOOM
 * Generates XML sitemap with multi-language support
 * https://kascoom.com/sitemap.xml
 */

export default function sitemap() {
  const baseUrl = 'https://kascoom.com';
  const lastModified = new Date();

  // Define all pages with their properties
  const pages = [
    {
      path: '',
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      path: '/services',
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      path: '/projects',
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      path: '/contact',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  // Generate sitemap entries for each page
  // Since language is handled client-side via localStorage,
  // we use a single URL per page with alternates for language hints
  const sitemapEntries = pages.map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
    alternates: {
      languages: {
        en: `${baseUrl}${page.path}`,
        ar: `${baseUrl}${page.path}`,
      },
    },
  }));

  return sitemapEntries;
}
