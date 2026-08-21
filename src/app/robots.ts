import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://fiyatpilot.com';
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: ['/admin/', '/api/', '/go/', '/ara'] },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
