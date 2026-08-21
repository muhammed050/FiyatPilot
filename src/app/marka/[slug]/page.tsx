import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProducts } from '@/lib/catalog';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const products = await getProducts();
  const brand = products.find((p) => p.brand.toLowerCase().replace(/\s+/g, '-') === slug)?.brand;
  if (!brand) return { title: 'Marka bulunamadı', robots: { index: false, follow: false } };
  return { title: `${brand} Fiyatları ve Ürünleri | FiyatPilot`, description: `${brand} ürünlerinin fiyatlarını, özelliklerini ve FiyatPilot skorlarını karşılaştırın.`, alternates: { canonical: `/marka/${slug}` } };
}

export default async function BrandPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const products = await getProducts();
  const items = products.filter((p) => p.brand.toLowerCase().replace(/\s+/g, '-') === slug);
  if (!items.length) notFound();
  const brand = items[0].brand;
  return <main className="container py-8 md:py-12">
    <nav aria-label="Breadcrumb" className="text-sm text-slate-500"><a href="/">Ana Sayfa</a><span className="mx-2">/</span><span>Markalar</span><span className="mx-2">/</span><span aria-current="page">{brand}</span></nav>
    <header className="mt-5 max-w-3xl"><p className="text-sm font-bold text-blue-600">Marka rehberi</p><h1 className="mt-2 text-3xl font-black tracking-tight md:text-4xl">{brand} ürünleri ve fiyatları</h1><p className="mt-3 leading-7 text-slate-600">{brand} ürünlerini fiyat, teknik özellik ve FiyatPilot değer skorlarına göre keşfedin. Satın almadan önce seçenekleri karşılaştırın.</p></header>
    <section className="mt-8 grid-auto">{items.map((p) => <article className="surface surface-hover overflow-hidden" key={p.id}><a href={`/urun/${p.slug}`}><img src={p.image} alt={`${p.name} ürün görseli`} width="900" height="675" className="aspect-[4/3] w-full object-cover" loading="lazy" /></a><div className="p-5"><h2 className="font-bold"><a href={`/urun/${p.slug}`} className="hover:text-blue-600">{p.name}</a></h2><p className="mt-2 text-sm text-slate-500">{p.description}</p><div className="mt-4 flex items-center justify-between"><strong className="price text-xl">{p.price.toLocaleString('tr-TR')} TL</strong><a className="btn btn-primary" href={`/urun/${p.slug}`}>İncele</a></div></div></article>)}</section>
  </main>;
}
