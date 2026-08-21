import { createClient } from '@/lib/supabase/server';
import { products as fallbackProducts, type Product } from '@/lib/products';

type DbProduct = {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  short_description: string | null;
  images: unknown;
  rating: number | null;
  review_count: number | null;
  current_price: number | null;
  lowest_price: number | null;
  ai_score: number | null;
  value_score: number | null;
  specifications: Record<string, unknown> | null;
  brand?: { name?: string; slug?: string } | null;
  category?: { name?: string; slug?: string } | null;
};

function firstImage(images: unknown): string | undefined {
  if (Array.isArray(images)) return typeof images[0] === 'string' ? images[0] : undefined;
  return undefined;
}

function toProduct(row: DbProduct): Product {
  return {
    id: row.id,
    name: row.name,
    slug: row.slug,
    brand: row.brand?.name || 'Marka',
    category: row.category?.name || 'Ürün',
    price: Number(row.current_price ?? row.lowest_price ?? 0),
    rating: Number(row.rating ?? 0),
    reviews: Number(row.review_count ?? 0),
    aiScore: Number(row.ai_score ?? 0),
    valueScore: Number(row.value_score ?? 0),
    image: firstImage(row.images) || '/placeholder-product.svg',
    description: row.description || row.short_description || `${row.name} için fiyat, özellik ve karşılaştırma bilgileri.`,
    specs: Object.fromEntries(Object.entries(row.specifications || {}).map(([key, value]) => [key, String(value)])),
  };
}

const dbEnabled = Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

export async function getProducts(): Promise<Product[]> {
  if (!dbEnabled) return fallbackProducts;
  try {
    const supabase = await createClient();
    const { data, error } = await supabase.from('products').select('id,name,slug,description,short_description,images,rating,review_count,current_price,lowest_price,ai_score,value_score,specifications,brand:brands(name,slug),category:categories(name,slug)').eq('active', true).order('updated_at', { ascending: false });
    if (error || !data?.length) return fallbackProducts;
    return (data as DbProduct[]).map(toProduct);
  } catch {
    return fallbackProducts;
  }
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  if (!dbEnabled) return fallbackProducts.find((p) => p.slug === slug) || null;
  try {
    const supabase = await createClient();
    const { data, error } = await supabase.from('products').select('id,name,slug,description,short_description,images,rating,review_count,current_price,lowest_price,ai_score,value_score,specifications,brand:brands(name,slug),category:categories(name,slug)').eq('slug', slug).eq('active', true).maybeSingle();
    if (!error && data) return toProduct(data as DbProduct);
  } catch {}
  return fallbackProducts.find((p) => p.slug === slug) || null;
}

export async function getCatalogSlugs() {
  const all = await getProducts();
  return all.map(({ slug }) => slug);
}

export async function getCatalogFacets() {
  const all = await getProducts();
  return {
    categories: [...new Set(all.map((p) => ({ name: p.category, slug: p.category.toLowerCase().replace(/\s+/g, '-') })).map(JSON.stringify))].map(JSON.parse) as { name: string; slug: string }[],
    brands: [...new Set(all.map((p) => ({ name: p.brand, slug: p.brand.toLowerCase().replace(/\s+/g, '-') })).map(JSON.stringify))].map(JSON.parse) as { name: string; slug: string }[],
  };
}
