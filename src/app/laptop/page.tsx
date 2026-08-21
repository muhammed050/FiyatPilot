import { products } from '@/lib/products';

function Icon({ children }: { children: React.ReactNode }) {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className="size-4">{children}</svg>;
}

export default function LaptopPage() {
  const slug = 'laptop';
  const title = 'En İyi Laptoplar';
  const items = products.filter((p) => p.category.toLowerCase() === slug);

  return <main className="container py-8 md:py-12">
    <div className="max-w-3xl">
      <div className="text-sm font-bold text-blue-600">FiyatPilot kategori</div>
      <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">{title}</h1>
      <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">Güncel fiyatlar, teknik özellikler ve FiyatPilot puanlarıyla doğru ürünü daha hızlı seç. Filtreleri ve karşılaştırmayı kullanarak bütçene uygun seçenekleri daralt.</p>
    </div>

    <div className="mt-7 flex gap-2 overflow-x-auto pb-2" aria-label="Laptop filtreleri">
      <button className="btn btn-primary whitespace-nowrap">Tümü</button>
      <button className="btn btn-secondary whitespace-nowrap">Marka</button>
      <button className="btn btn-secondary whitespace-nowrap">Fiyat</button>
      <button className="btn btn-secondary whitespace-nowrap">Fiyat/Performans</button>
      <button className="btn btn-secondary whitespace-nowrap">En yüksek puan</button>
    </div>

    <div className="mt-5 flex items-center justify-between border-b border-slate-200 pb-4"><p className="text-sm text-slate-500"><strong className="text-slate-900">{items.length || products.length}</strong> ürün bulundu</p><span className="hidden items-center gap-1 text-xs font-semibold text-slate-400 sm:flex"><Icon><path d="M4 6h16" /><path d="M7 12h10" /><path d="M10 18h4" /></Icon> Güncel seçimler</span></div>

    <div className="mt-6 grid-auto">
      {(items.length ? items : products).map((p) => <article className="surface surface-hover overflow-hidden" key={p.id}>
        <a href={'/urun/' + p.slug} className="block"><div className="relative aspect-[4/3] overflow-hidden bg-slate-100"><img src={p.image} alt={p.name} className="h-full w-full object-cover transition duration-300 hover:scale-[1.02]" loading="lazy" /><span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-extrabold text-violet-700 shadow-sm">AI {p.aiScore}</span></div></a>
        <div className="p-4 sm:p-5"><div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">{p.brand}</div><a href={'/urun/' + p.slug} className="mt-1 block min-h-10 font-bold leading-5 transition hover:text-blue-600">{p.name}</a><div className="mt-3 flex items-center justify-between gap-2"><span className="price text-xl font-extrabold">{p.price.toLocaleString('tr-TR')} TL</span><span className="rounded-full bg-emerald-50 px-2 py-1 text-[11px] font-bold text-emerald-700">İyi fiyat</span></div><a className="btn btn-primary mt-4 w-full" href={'/urun/' + p.slug}>Ürünü İncele <Icon><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></Icon></a></div>
      </article>)}
    </div>
  </main>;
}
