import { products } from '@/lib/products';

function Icon({ children }: { children: React.ReactNode }) {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5">{children}</svg>;
}

export default function Home() {
  return (
    <main>
      <section className="border-b bg-white">
        <div className="container py-16 md:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1.5 text-sm font-semibold text-blue-700">
              <Icon><path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" /><path d="m19 3 .6 1.4L21 5l-1.4.6L19 7l-.6-1.4L17 5l1.4-.6L19 3Z" /></Icon>
              Akıllı alışveriş asistanı
            </div>
            <h1 className="text-4xl font-black tracking-tight md:text-6xl">Ne alacağını bilmiyor musun?<br/><span className="text-blue-600">FiyatPilot seçsin.</span></h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">Bütçene, kullanım amacına ve güncel fiyatlara göre sana en uygun ürünü bul. Karşılaştır, karar ver ve doğru fiyattan satın al.</p>
            <form action="/ara" className="mx-auto mt-8 flex max-w-2xl gap-2 rounded-2xl border bg-slate-50 p-2 shadow-sm">
              <Icon><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></Icon>
              <input name="q" className="min-w-0 flex-1 bg-transparent outline-none" placeholder="Laptop, telefon, robot süpürge..."/>
              <button className="btn btn-primary">Akıllı Ara</button>
            </form>
            <div className="mt-5 flex flex-wrap justify-center gap-2 text-sm"><span className="text-slate-500">Popüler:</span>{['Öğrenci laptop','En iyi laptop','Gaming laptop','Robot süpürge','Tablet'].map(x=><a href={'/ara?q='+encodeURIComponent(x)} className="rounded-full bg-slate-100 px-3 py-1.5 hover:bg-blue-50 hover:text-blue-700" key={x}>{x}</a>)}</div>
          </div>
        </div>
      </section>
      <section className="container py-12">
        <div className="mb-6 flex items-end justify-between"><div><p className="font-semibold text-blue-600">Bugün</p><h2 className="text-2xl font-black">Fiyat/performans seçimleri</h2></div><a href="/laptop" className="flex items-center gap-1 text-sm font-bold text-blue-600">Tümünü gör <Icon><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></Icon></a></div>
        <div className="grid-auto">{products.map(p=><ProductCard key={p.id} p={p}/>)}</div>
      </section>
      <section className="container grid gap-4 py-4 md:grid-cols-3">
        <Feature icon={<Icon><path d="M3 17h18" /><path d="M6 13h12" /><path d="M9 9h6" /><path d="m7 21 5-5 5 5" /></Icon>} title="Gerçek fiyat takibi" text="Fiyat geçmişini ve değişimleri tek yerde takip et."/>
        <Feature icon={<Icon><path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" /><path d="m19 3 .6 1.4L21 5l-1.4.6L19 7l-.6-1.4L17 5l1.4-.6L19 3Z" /></Icon>} title="AI karar desteği" text="Bütçene ve kullanımına göre seçenekleri sıralayalım."/>
        <Feature icon={<Icon><path d="M12 3 5 6v5c0 4.7 3 8.2 7 10 4-1.8 7-5.3 7-10V6l-7-3Z" /><path d="m9 12 2 2 4-4" /></Icon>} title="Şeffaf karşılaştırma" text="Mağaza tekliflerini ve fiyat sinyallerini açıkça gör."/>
      </section>
    </main>
  );
}

function ProductCard({p}:{p:typeof products[number]}) {
  return <article className="surface overflow-hidden"><a href={'/urun/'+p.slug}><div className="aspect-[4/3] bg-slate-100"><img src={p.image} alt={p.name} className="h-full w-full object-cover" loading="lazy"/></div></a><div className="p-4"><div className="text-xs font-bold uppercase text-slate-500">{p.brand}</div><a href={'/urun/'+p.slug} className="mt-1 block font-bold hover:text-blue-600">{p.name}</a><div className="mt-2 flex items-center gap-2 text-sm"><span className="font-bold">★ {p.rating}</span><span className="muted">({p.reviews})</span><span className="ml-auto rounded-full bg-violet-50 px-2 py-1 text-xs font-bold text-violet-700">AI {p.aiScore}</span></div><div className="mt-4 flex items-end justify-between"><div><div className="text-xs text-slate-400 line-through">{p.oldPrice?.toLocaleString('tr-TR')} TL</div><div className="price text-2xl font-black">{p.price.toLocaleString('tr-TR')} TL</div><div className="text-xs font-semibold text-emerald-600">🟢 İyi fiyat</div></div><a href={'/urun/'+p.slug} className="btn btn-primary px-3 py-2 text-sm">İncele</a></div></div></article>;
}

function Feature({icon,title,text}:{icon:React.ReactNode;title:string;text:string}) {
  return <div className="surface p-5"><div className="mb-3 grid size-10 place-items-center rounded-xl bg-blue-50 text-blue-600">{icon}</div><h3 className="font-bold">{title}</h3><p className="mt-1 text-sm leading-6 text-slate-500">{text}</p></div>;
}
