import type { MetadataRoute } from 'next';
import { products } from '@/lib/products';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://fiyatpilot.com';
  const now = new Date();
  return [
    { url: `${base}/`, lastModified: now, changeFrequency: 'daily', priority: 1 },
    { url: `${base}/firsatlar`, lastModified: now, changeFrequency: 'hourly', priority: 0.9 },
    { url: `${base}/laptop`, lastModified: now, changeFrequency: 'daily', priority: 0.9 },
    { url: `${base}/karsilastir`, lastModified: now, changeFrequency: 'daily', priority: 0.8 },
    { url: `${base}/rehber`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    ...products.map((p) => ({
      url: `${base}/urun/${p.slug}`,
      lastModified: now,
      changeFrequency: 'daily' as const,
      priority: 0.8,
    })),
  ];
}
