/**
 * Projects Data
 *
 * Central repository for all project information displayed across the website.
 * Used in: About page (Our Works section), Projects listing page
 */

const projects = [
  {
    id: 'jizan-igcc',
    title: 'Jizan IGCC Power Project',
    slug: 'jizan-igcc',
    location: 'Jizan, Saudi Arabia',
    category: 'Power & Energy',
    year: '2024',
    description: 'Major power generation and industrial support works',
    image: '/images/about/projects/project-1.png',
    featured: true,
    status: 'completed',
  },
  {
    id: 'kaust-university',
    title: 'KAUST University Projects',
    slug: 'kaust-university',
    location: 'Thuwal, Saudi Arabia',
    category: 'Construction',
    year: '2024',
    description: 'Large-scale construction and inspection services',
    image: '/images/about/projects/project-2.png',
    featured: true,
    status: 'completed',
  },
  {
    id: 'sadaf-petrochemical',
    title: 'SADAF Petrochemical Facilities',
    slug: 'sadaf-petrochemical',
    location: 'Jubail Industrial City',
    category: 'Petrochemical',
    year: '2023',
    description: 'Fabrication and mechanical works for petrochemical plants',
    image: '/images/about/projects/project-3.png',
    featured: true,
    status: 'completed',
  },
  {
    id: 'manifa-oilfield',
    title: 'Manifa Oil Field Project',
    slug: 'manifa-oilfield',
    location: 'Eastern Province, Saudi Arabia',
    category: 'Oil & Gas',
    year: '2023',
    description: 'Mechanical services for offshore oil operations',
    image: '/images/about/projects/project-4.png',
    featured: true,
    status: 'completed',
  },
];

// Get all projects
export const getAllProjects = () => projects;

// Get featured projects (shown on homepage)
export const getFeaturedProjects = () =>
  projects.filter(project => project.featured);

// Get project by ID
export const getProjectById = (id) =>
  projects.find(project => project.id === id);

// Get project by slug
export const getProjectBySlug = (slug) =>
  projects.find(project => project.slug === slug);

// Get projects by category
export const getProjectsByCategory = (category) =>
  projects.filter(project => project.category === category);

// Get all unique categories
export const getCategories = () =>
  [...new Set(projects.map(project => project.category))];
