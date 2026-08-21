import type { Metadata } from 'next';
import { products } from '@/lib/products';

export const metadata: Metadata = {
  title: 'Ürün Ara',
  description: 'FiyatPilot ürün aramasını kullanarak ürün, marka veya kategori bulun.',
  robots: { index: false, follow: true },
};

export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const { q = '' } = await searchParams;
  const query = q.toLowerCase().trim();
  const synonyms = query.replace('robot supurge', 'robot süpürge');
  const results = products.filter((p) => [p.name, p.brand, p.category, p.description].join(' ').toLowerCase().includes(synonyms));
  return <main className="container py-10"><nav aria-label="Breadcrumb" className="text-sm text-slate-500"><a href="/" className="hover:text-blue-600">Ana Sayfa</a><span className="mx-2">/</span><span aria-current="page">Ara</span></nav><h1 className="mt-4 text-3xl font-black">{q ? `“${q}” sonuçları` : 'Ürün ara'}</h1><div className="mt-6 max-w-2xl"><form className="flex gap-2" action="/ara" role="search"><input name="q" defaultValue={q} className="flex-1 rounded-xl border bg-white p-3 outline-none focus:border-blue-500" placeholder="Ne arıyorsun?" aria-label="Ürün, marka veya kategori ara" /><button className="btn btn-primary">Ara</button></form></div><div className="mt-8 grid-auto">{results.map((p) => <article className="surface p-4" key={p.id}><div className="flex gap-4"><img src={p.image} alt={`${p.name} ürün görseli`} width="112" height="112" className="size-28 rounded-xl object-cover" loading="lazy" /><div className="min-w-0"><div className="text-xs font-bold text-slate-500">{p.brand}</div><h2 className="mt-1 font-bold">{p.name}</h2><div className="mt-2 price text-xl font-black">{p.price.toLocaleString('tr-TR')} TL</div><a href={'/urun/' + p.slug} className="mt-3 inline-block text-sm font-bold text-blue-600">Ürünü incele →</a></div></div></article>)}</div>{!results.length && <div className="surface mt-8 p-10 text-center"><h2 className="font-bold">Sonuç bulunamadı.</h2><p className="mt-2 text-sm text-slate-500">Farklı bir ürün, marka veya kategori deneyin.</p></div>}</main>;
}
