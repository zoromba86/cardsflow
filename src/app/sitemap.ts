import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://cardsflow.net';
  
  // High priority pages
  const corePages = [
    '',
    '/faq',
    '/use-cases/ad-spend-management',
    '/use-cases/travel-spend-management',
    '/use-cases/online-service-subscriptions',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.9,
  }));

  // Guides & Compare (Medium priority)
  const resourcePages = [
    '/compare/virtual-card-vs-shared-team-card-for-ad-spend',
    '/compare/virtual-card-vs-corporate-card-for-travel-spend',
    '/guides/how-virtual-cards-work-for-online-payments',
    '/guides/how-to-manage-online-service-renewals',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Trust & Legal (Lower priority)
  const trustLegalPages = [
    '/about',
    '/contact',
    '/trust',
    '/trust/fees-and-disclosures',
    '/trust/how-we-review-content',
    '/trust/prohibited-use',
    '/trust/security-and-data-handling',
    '/trust/support-and-escalations',
    '/legal/privacy',
    '/legal/terms',
    '/legal/cookies',
    '/legal/aml-policy',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));

  return [...corePages, ...resourcePages, ...trustLegalPages];
}
