import type { Metadata } from 'next';
import { products } from '@/lib/products';

export const metadata: Metadata = {
  title: 'Ürün Karşılaştırma | Fiyat ve Özellikleri Karşılaştır',
  description: 'Ürünleri fiyat, teknik özellik, FiyatPilot AI skoru ve fiyat/performans açısından karşılaştırın.',
  alternates: { canonical: '/karsilastir' },
  openGraph: { title: 'Ürün Karşılaştırma', description: 'Fiyat ve teknik özellikleri tek tabloda karşılaştırın.', url: '/karsilastir' },
};

export default function ComparePage() {
  const selected = products.slice(0, 3);
  return <main className="container py-10"><nav aria-label="Breadcrumb" className="text-sm text-slate-500"><a href="/" className="hover:text-blue-600">Ana Sayfa</a><span className="mx-2">/</span><span aria-current="page">Karşılaştır</span></nav><h1 className="mt-4 text-3xl font-black">Ürünleri Karşılaştır</h1><p className="mt-2 text-slate-500">En fazla 4 ürünü teknik özellik, fiyat ve FiyatPilot skorlarıyla karşılaştır.</p><div className="mt-8 overflow-x-auto surface"><table className="w-full min-w-[760px] text-left text-sm"><caption className="sr-only">Ürün fiyat ve özellik karşılaştırması</caption><thead><tr className="border-b bg-slate-50"><th scope="col" className="p-4">Özellik</th>{selected.map((p) => <th scope="col" className="p-4" key={p.id}><a className="hover:text-blue-600" href={'/urun/' + p.slug}>{p.name}</a></th>)}</tr></thead><tbody>{[['Güncel fiyat', ...selected.map((p) => p.price.toLocaleString('tr-TR') + ' TL')], ['AI Skoru', ...selected.map((p) => p.aiScore + '/100')], ['Fiyat/Performans', ...selected.map((p) => p.valueScore + '/100')], ['Puan', ...selected.map((p) => p.rating + '/5')], ['RAM', ...selected.map((p) => p.specs.RAM || '—')]].map((r, i) => <tr className="border-b last:border-0" key={i}>{r.map((x, j) => <td className={'p-4 ' + (j === 0 ? 'font-bold' : '')} key={j}>{x}</td>)}</tr>)}</tbody></table></div><section className="mt-8 surface border-violet-100 bg-violet-50 p-6"><div className="text-sm font-bold text-violet-700">✨ FiyatPilot Önerisi</div><h2 className="mt-1 text-xl font-black">Fiyat/performans için Lenovo LOQ öne çıkıyor.</h2><p className="mt-2 text-sm text-slate-600">Karar motoru fiyat, kalite ve değer skorlarını birlikte değerlendirerek en dengeli seçeneği öne çıkarır.</p></section></main>;
}
