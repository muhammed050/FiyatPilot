import type { Metadata } from 'next';
import { products } from '@/lib/products';

export const metadata: Metadata = {
  title: 'En İyi Fırsatlar ve İndirimli Ürünler',
  description: 'Fiyatı düşen ürünleri ve indirim fırsatlarını keşfedin. FiyatPilot ile güncel fiyat ve tasarruf oranlarını karşılaştırın.',
  alternates: { canonical: '/firsatlar' },
  openGraph: { title: 'En İyi Fırsatlar ve İndirimli Ürünler', description: 'Güncel indirimleri ve fiyat düşüşlerini keşfedin.', url: '/firsatlar' },
};

export default function Deals() {
  const deals = products.filter((p) => p.oldPrice && p.oldPrice > p.price);
  return <main className="container py-10"><nav aria-label="Breadcrumb" className="text-sm text-slate-500"><a href="/" className="hover:text-blue-600">Ana Sayfa</a><span className="mx-2">/</span><span aria-current="page">Fırsatlar</span></nav><div className="mt-4"><div className="text-sm font-bold text-emerald-600">Bugünün seçimi</div><h1 className="mt-1 text-4xl font-black">En İyi Fırsatlar</h1><p className="mt-3 text-slate-600">Fiyatı düşen ürünleri, güncel teklifleri ve değer sinyallerini tek yerde keşfet.</p></div><div className="mt-8 grid-auto">{deals.map((p) => { const pct = Math.round((1 - p.price / (p.oldPrice || p.price)) * 100); return <article className="surface surface-hover overflow-hidden p-4" key={p.id}><div className="relative"><img src={p.image} alt={`${p.name} indirimli ürün görseli`} width="900" height="675" className="aspect-[4/3] w-full rounded-xl object-cover" loading="lazy" /><span className="absolute left-3 top-3 rounded-full bg-emerald-600 px-2.5 py-1 text-xs font-black text-white">%{pct} düştü</span></div><h2 className="mt-4 font-bold">{p.name}</h2><div className="mt-2 text-sm text-slate-400 line-through">{p.oldPrice?.toLocaleString('tr-TR')} TL</div><div className="price text-2xl font-black">{p.price.toLocaleString('tr-TR')} TL</div><a href={'/urun/' + p.slug} className="btn btn-primary mt-4 w-full">Fırsatı İncele</a></article>; })}</div></main>;
}
