import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/dashboard',
        '/dashboard/',
        '/login',
        '/register',
        '/forgot-password',
        '/onboarding',
      ],
    },
    sitemap: 'https://cardsflow.net/sitemap.xml',
  };
}
