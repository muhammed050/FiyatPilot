import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProducts } from '@/lib/catalog';

const reserved = new Set(['admin','api','ara','firsatlar','giris','karsilastir','laptop','rehber','urun','marka']);

function slugify(value: string) { return value.toLowerCase().trim().replace(/\s+/g, '-'); }

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params;
  if (reserved.has(category)) return { robots: { index: false, follow: false } };
  const products = await getProducts();
  const items = products.filter((p) => slugify(p.category) === category);
  if (!items.length) return { title: 'Kategori bulunamadı', robots: { index: false, follow: false } };
  const name = items[0].category;
  return { title: `${name} Fiyatları ve En İyi Ürünler | FiyatPilot`, description: `${name} ürünlerinin güncel fiyatlarını, özelliklerini ve FiyatPilot skorlarını karşılaştırın.`, alternates: { canonical: `/${category}` } };
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  if (reserved.has(category)) notFound();
  const products = await getProducts();
  const items = products.filter((p) => slugify(p.category) === category);
  if (!items.length) notFound();
  const name = items[0].category;
  return <main className="container py-8 md:py-12">
    <nav aria-label="Breadcrumb" className="text-sm text-slate-500"><a href="/">Ana Sayfa</a><span className="mx-2">/</span><span aria-current="page">{name}</span></nav>
    <header className="mt-5 max-w-3xl"><p className="text-sm font-bold text-blue-600">FiyatPilot kategori</p><h1 className="mt-2 text-3xl font-black tracking-tight md:text-4xl">{name} fiyatları ve en iyi ürünler</h1><p className="mt-3 leading-7 text-slate-600">{name} seçeneklerini fiyat, özellik ve değer skorlarına göre keşfedin. Güncel teklifleri karşılaştırarak daha bilinçli alışveriş yapın.</p></header>
    <div className="mt-8 grid-auto">{items.map((p) => <article className="surface surface-hover overflow-hidden" key={p.id}><a href={`/urun/${p.slug}`}><img src={p.image} alt={`${p.name} ürün görseli`} width="900" height="675" className="aspect-[4/3] w-full object-cover" loading="lazy" /></a><div className="p-5"><div className="text-xs font-bold uppercase tracking-wider text-slate-400">{p.brand}</div><h2 className="mt-1 font-bold"><a href={`/urun/${p.slug}`} className="hover:text-blue-600">{p.name}</a></h2><p className="mt-2 text-sm text-slate-500">{p.description}</p><div className="mt-4 flex items-center justify-between"><strong className="price text-xl">{p.price.toLocaleString('tr-TR')} TL</strong><a className="btn btn-primary" href={`/urun/${p.slug}`}>İncele</a></div></div></article>)}</div>
  </main>;
}
