import { products } from '@/lib/products';

function Icon({ children, className = 'size-5' }: { children: React.ReactNode; className?: string }) {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className={className}>{children}</svg>;
}

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-slate-200/80 bg-white">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_50%_0%,rgba(20,87,217,.09),transparent_65%)]" />
        <div className="container relative py-12 md:py-16 lg:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-700 sm:text-sm">
              <span className="grid size-5 place-items-center rounded-full bg-white text-blue-600 shadow-sm"><Icon className="size-3.5"><path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" /></Icon></span>
              Daha akıllı alışveriş, daha doğru fiyat
            </div>
            <h1 className="text-[2.55rem] font-extrabold leading-[1.06] tracking-[-.055em] text-slate-950 sm:text-5xl md:text-[4.15rem]">Doğru ürünü, <span className="text-blue-600">doğru fiyata.</span></h1>
            <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-slate-600 sm:text-base md:text-lg">Güncel fiyatları karşılaştır, fırsatları keşfet ve satın almadan önce daha bilinçli karar ver.</p>

            <form action="/ara" className="mx-auto mt-8 flex max-w-2xl flex-col gap-2 rounded-[14px] border border-slate-200 bg-white p-2 shadow-[0_16px_45px_rgba(16,24,40,.09)] sm:flex-row" role="search">
              <div className="relative flex min-w-0 flex-1 items-center">
                <Icon className="absolute left-3 size-5 text-slate-400"><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></Icon>
                <input name="q" aria-label="Aramak istediğiniz ürünü yazın" className="h-11 w-full min-w-0 bg-transparent pl-11 pr-3 text-sm outline-none placeholder:text-slate-400" placeholder="Laptop, telefon, robot süpürge..." />
              </div>
              <button className="btn btn-primary h-11 px-5">Akıllı Ara <Icon className="size-4"><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></Icon></button>
            </form>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-sm">
              <span className="mr-1 text-slate-400">Popüler</span>
              {['Öğrenci laptop', 'Gaming laptop', 'Robot süpürge', 'Tablet'].map((x) => <a href={'/ara?q=' + encodeURIComponent(x)} className="rounded-full border border-slate-200 bg-white px-3 py-1.5 font-medium text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700" key={x}>{x}</a>)}
            </div>
          </div>
        </div>
      </section>

      <section className="container py-10 md:py-14">
        <div className="mb-5 flex items-end justify-between gap-4">
          <div><p className="text-xs font-extrabold uppercase tracking-[.12em] text-blue-600">Seçtiklerimiz</p><h2 className="mt-1 text-2xl font-extrabold tracking-[-.035em] text-slate-950 md:text-3xl">Fiyat/performans seçimleri</h2><p className="mt-1 text-sm text-slate-500">Bugün öne çıkan ürünleri keşfet.</p></div>
          <a href="/laptop" className="hidden items-center gap-1 rounded-lg px-2 py-2 text-sm font-bold text-blue-600 transition hover:bg-blue-50 sm:flex">Tümünü gör <Icon className="size-4"><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></Icon></a>
        </div>
        <div className="grid-auto">{products.map((p) => <ProductCard key={p.id} p={p} />)}</div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="container grid md:grid-cols-3 md:divide-x md:divide-slate-200">
          <Feature icon={<Icon><path d="M3 17h18" /><path d="M6 13h12" /><path d="M9 9h6" /><path d="m7 21 5-5 5 5" /></Icon>} title="Gerçek fiyat takibi" text="Fiyat geçmişini ve değişimleri tek yerde takip et." />
          <Feature icon={<Icon><path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" /></Icon>} title="Akıllı karar desteği" text="Bütçene ve kullanımına göre seçenekleri kolayca değerlendir." />
          <Feature icon={<Icon><path d="M12 3 5 6v5c0 4.7 3 8.2 7 10 4-1.8 7-5.3 7-10V6l-7-3Z" /><path d="m9 12 2 2 4-4" /></Icon>} title="Şeffaf karşılaştırma" text="Mağaza tekliflerini ve fiyat sinyallerini açıkça gör." />
        </div>
      </section>
    </main>
  );
}

function ProductCard({ p }: { p: typeof products[number] }) {
  return <article className="surface surface-hover overflow-hidden">
    <a href={'/urun/' + p.slug} className="block">
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        <img src={p.image} alt={p.name} className="h-full w-full object-cover transition duration-300 hover:scale-[1.02]" loading="lazy" />
        <span className="absolute left-3 top-3 rounded-full border border-white/80 bg-white/95 px-2.5 py-1 text-[11px] font-extrabold text-violet-700 shadow-sm">AI {p.aiScore}</span>
      </div>
    </a>
    <div className="p-4 sm:p-5">
      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">{p.brand}</div>
      <a href={'/urun/' + p.slug} className="mt-1 block min-h-11 font-bold leading-5 text-slate-900 transition hover:text-blue-600">{p.name}</a>
      <div className="mt-2 flex items-center gap-2 text-sm"><span className="font-bold text-slate-800">★ {p.rating}</span><span className="text-slate-400">({p.reviews})</span><span className="ml-auto rounded-full bg-emerald-50 px-2 py-1 text-[11px] font-bold text-emerald-700">İyi fiyat</span></div>
      <div className="mt-4 flex items-end justify-between gap-3 border-t border-slate-100 pt-4"><div><div className="text-xs text-slate-400 line-through">{p.oldPrice?.toLocaleString('tr-TR')} TL</div><div className="price text-2xl font-extrabold text-slate-950">{p.price.toLocaleString('tr-TR')} TL</div></div><a href={'/urun/' + p.slug} className="btn btn-primary px-3.5 py-2.5 text-sm">İncele</a></div>
    </div>
  </article>;
}

function Feature({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return <div className="bg-white p-6 md:p-8"><div className="mb-4 grid size-10 place-items-center rounded-[10px] bg-blue-50 text-blue-600">{icon}</div><h3 className="font-bold text-slate-950">{title}</h3><p className="mt-1.5 text-sm leading-6 text-slate-500">{text}</p></div>;
}
