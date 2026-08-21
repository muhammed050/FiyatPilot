import type { Metadata } from 'next';
import { products } from '@/lib/products';

export const metadata: Metadata = {
  title: 'Alışveriş Rehberi | Ürün Seçme ve Fiyat Karşılaştırma İpuçları',
  description: 'Laptop, tablet ve teknoloji alışverişinde doğru ürünü seçmek için pratik rehberler, karşılaştırmalar ve fiyat değerlendirme ipuçları.',
  alternates: { canonical: '/rehber' },
  openGraph: { title: 'FiyatPilot Alışveriş Rehberi', description: 'Doğru ürünü seçmek ve fiyatları daha bilinçli değerlendirmek için rehberler.', url: '/rehber' },
};

const topics = [
  { href: '/laptop', title: 'Laptop seçme rehberi', text: 'Gaming, öğrenci ve günlük kullanım için işlemci, RAM, ekran ve fiyat/performans kriterlerini inceleyin.' },
  { href: '/karsilastir', title: 'Ürün karşılaştırma', text: 'Fiyat, puan ve teknik özellikleri yan yana değerlendirerek kararınızı kolaylaştırın.' },
  { href: '/firsatlar', title: 'Fırsatları keşfet', text: 'Fiyatı düşen ürünleri ve indirim oranlarını tek yerde takip edin.' },
];

export default function GuideHub() {
  const featured = products.slice(0, 3);
  const schema = { '@context': 'https://schema.org', '@type': 'CollectionPage', name: 'FiyatPilot Alışveriş Rehberi', description: 'Ürün seçimi ve fiyat karşılaştırma rehberleri.', url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://fiyatpilot.com'}/rehber` };
  return <main className="container py-10 md:py-14"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /><nav aria-label="Breadcrumb" className="text-sm text-slate-500"><a href="/" className="hover:text-blue-600">Ana Sayfa</a><span className="mx-2">/</span><span aria-current="page">Rehber</span></nav><header className="mt-5 max-w-3xl"><p className="text-sm font-bold text-blue-600">FiyatPilot Rehber</p><h1 className="mt-2 text-4xl font-black tracking-tight">Daha bilinçli alışveriş için pratik rehberler</h1><p className="mt-4 text-base leading-7 text-slate-600">Ürün seçerken hangi özelliklere bakmanız gerektiğini, fiyatı nasıl değerlendirileceğini ve seçenekleri nasıl karşılaştırabileceğinizi sade bir dille keşfedin.</p></header><section className="mt-10 grid gap-5 md:grid-cols-3" aria-label="Rehber konuları">{topics.map((topic) => <a key={topic.href} href={topic.href} className="surface surface-hover p-6"><h2 className="text-lg font-black">{topic.title}</h2><p className="mt-2 text-sm leading-6 text-slate-600">{topic.text}</p><span className="mt-4 inline-block text-sm font-bold text-blue-600">İncele →</span></a>)}</section><section className="mt-12"><div className="flex items-end justify-between gap-4"><div><p className="text-xs font-extrabold uppercase tracking-[.12em] text-blue-600">Öne çıkan ürünler</p><h2 className="mt-1 text-2xl font-black">Detaylı ürün sayfaları</h2></div></div><div className="mt-5 grid-auto">{featured.map((p) => <a href={'/urun/' + p.slug} className="surface surface-hover overflow-hidden" key={p.id}><img src={p.image} alt={`${p.name} ürün görseli`} width="900" height="675" className="aspect-[4/3] w-full object-cover" loading="lazy" /><div className="p-5"><h3 className="font-bold">{p.name}</h3><p className="mt-2 text-sm text-slate-500">{p.description}</p><span className="mt-3 inline-block text-sm font-bold text-blue-600">Ürünü incele →</span></div></a>)}</div></section></main>;
}
