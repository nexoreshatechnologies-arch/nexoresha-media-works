import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://nexoresha.tech';
  
  const routes = [
    '',
    '/contact',
    '/highlights',
    '/privacy-policy',
    '/terms-of-service',
    '/team/ayush-choudhary',
    '/team/prasad-dhage',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : route.startsWith('/team') ? 0.7 : 0.5,
  }));
}
