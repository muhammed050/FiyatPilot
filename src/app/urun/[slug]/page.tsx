import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProductBySlug } from '@/lib/catalog';
import { PriceHistory } from '@/components/price-history';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://fiyatpilot.com';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = await getProductBySlug(slug);
  if (!p) return { title: 'Ürün bulunamadı', robots: { index: false, follow: false } };
  const title = `${p.name} Fiyatı, Özellikleri ve Karşılaştırma`;
  const description = `${p.name} için güncel fiyat, teknik özellikler, FiyatPilot puanı ve fiyat geçmişini inceleyin. ${p.brand} ${p.category} seçeneklerini karşılaştırın.`;
  return {
    title,
    description,
    alternates: { canonical: `/urun/${p.slug}` },
    openGraph: { type: 'website', title, description, url: `/urun/${p.slug}`, images: [{ url: p.image, alt: p.name }] },
    twitter: { card: 'summary_large_image', title, description, images: [p.image] },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = await getProductBySlug(slug);
  if (!p) notFound();
  const productUrl = `${siteUrl}/urun/${p.slug}`;
  const categoryUrl = `${siteUrl}/${p.category.toLowerCase().replace(/\s+/g, '-')}`;
  const breadcrumb = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: p.category, item: categoryUrl },
      { '@type': 'ListItem', position: 3, name: p.name, item: productUrl },
    ],
  };
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Product', name: p.name,
    brand: { '@type': 'Brand', name: p.brand }, description: p.description, image: [p.image], sku: p.id,
    ...(p.rating > 0 && p.reviews > 0 ? { aggregateRating: { '@type': 'AggregateRating', ratingValue: p.rating, bestRating: 5, ratingCount: p.reviews } } : {}),
    ...(p.price > 0 ? { offers: { '@type': 'Offer', price: p.price, priceCurrency: 'TRY', availability: 'https://schema.org/InStock', url: productUrl } } : {}),
  };
  return <main className="container py-8">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    <nav aria-label="Breadcrumb" className="text-sm text-slate-500"><a className="hover:text-blue-600" href="/">Ana Sayfa</a><span className="mx-2">/</span><a className="hover:text-blue-600" href={categoryUrl.replace(siteUrl, '')}>{p.category}</a><span className="mx-2">/</span><span aria-current="page">{p.name}</span></nav>
    <section className="mt-5 grid gap-8 lg:grid-cols-[1.05fr_.95fr]">
      <div className="surface overflow-hidden"><div className="bg-slate-50"><img src={p.image} alt={`${p.name} ürün görseli`} width="900" height="675" className="aspect-[4/3] w-full object-cover" fetchPriority="high" /></div><div className="grid grid-cols-2 border-t"><button className="p-3 font-semibold hover:bg-slate-50">♡ Favori</button><button className="border-l p-3 font-semibold hover:bg-slate-50">⚖ Karşılaştır</button></div></div>
      <div><div className="text-sm font-bold uppercase text-slate-500">{p.brand}</div><h1 className="mt-1 text-3xl font-black md:text-4xl">{p.name}</h1><div className="mt-3 flex flex-wrap gap-2">{p.rating > 0 && <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-bold">★ {p.rating} ({p.reviews})</span>}{p.aiScore > 0 && <span className="rounded-full bg-violet-50 px-3 py-1 text-sm font-bold text-violet-700">✨ AI Skoru {p.aiScore}</span>}{p.price > 0 && <span className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-bold text-emerald-700">🟢 Güncel fiyat</span>}</div><p className="mt-5 leading-7 text-slate-600">{p.description}</p><div className="mt-6 surface p-5"><div className="text-sm text-slate-500">Güncel Fiyat</div><div className="price mt-1 text-4xl font-black">{p.price > 0 ? `${p.price.toLocaleString('tr-TR')} TL` : 'Fiyat yakında'}</div><div className="mt-1 text-sm text-slate-400">Mağaza teklifleri ve fiyat geçmişi veri kaynağı bağlandıkça otomatik güncellenir.</div><a href={'/go/' + p.slug + '/demo'} className="btn btn-primary mt-5 w-full">Satın Alma Seçeneklerini Gör</a></div></div>
    </section>
    <section className="mt-8 grid gap-6 lg:grid-cols-[1.4fr_.6fr]"><div className="surface p-5"><h2 className="text-xl font-black">Fiyat Geçmişi</h2><p className="mt-1 text-sm text-slate-500">Ürünün zaman içindeki fiyat hareketleri.</p><PriceHistory current={p.price} /></div><div className="surface p-5"><h2 className="text-xl font-black">Teknik Özellikler</h2><dl className="mt-4 divide-y">{Object.entries(p.specs).map(([k, v]) => <div className="flex justify-between gap-4 py-3 text-sm" key={k}><dt className="text-slate-500">{k}</dt><dd className="text-right font-semibold">{v}</dd></div>)}</dl></div></section>
  </main>;
}
