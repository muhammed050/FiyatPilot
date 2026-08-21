import type { MetadataRoute } from 'next';
import { getProducts, getCatalogFacets } from '@/lib/catalog';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://fiyatpilot.com';
  const now = new Date();
  const [products, facets] = await Promise.all([getProducts(), getCatalogFacets()]);
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: 'daily', priority: 1 },
    { url: `${base}/firsatlar`, lastModified: now, changeFrequency: 'hourly', priority: 0.9 },
    { url: `${base}/karsilastir`, lastModified: now, changeFrequency: 'daily', priority: 0.8 },
    { url: `${base}/rehber`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
  ];
  const categoryPages = facets.categories.map((c) => ({ url: `${base}/${c.slug}`, lastModified: now, changeFrequency: 'daily' as const, priority: 0.85 }));
  const brandPages = facets.brands.map((b) => ({ url: `${base}/marka/${b.slug}`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.65 }));
  const productPages = products.map((p) => ({ url: `${base}/urun/${p.slug}`, lastModified: now, changeFrequency: 'daily' as const, priority: 0.8 }));
  return [...staticPages, ...categoryPages, ...brandPages, ...productPages];
}
