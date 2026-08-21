export function Footer() {
  return <footer className="mt-16 border-t border-slate-200 bg-white">
    <div className="container grid gap-10 py-12 sm:grid-cols-2 md:grid-cols-4 md:py-14">
      <div className="sm:col-span-2 md:col-span-1">
        <a href="/" className="inline-flex items-center rounded-lg text-xl font-extrabold tracking-[-.04em] text-slate-950 focus-visible:outline-offset-2">Fiyat<span className="text-blue-600">Pilot</span></a>
        <p className="mt-3 max-w-xs text-sm leading-6 text-slate-500">Akıllı alışveriş. Doğru karar. Ürünleri ve fiyatları daha kolay karşılaştır.</p>
      </div>
      <div><h3 className="text-sm font-bold text-slate-950">Keşfet</h3><div className="mt-4 grid gap-2.5 text-sm text-slate-500"><a className="transition hover:text-blue-600" href="/en-iyi-laptop">En iyi laptoplar</a><a className="transition hover:text-blue-600" href="/firsatlar">Fırsatlar</a><a className="transition hover:text-blue-600" href="/karsilastir">Karşılaştır</a><a className="transition hover:text-blue-600" href="/rehber">Rehber</a></div></div>
      <div><h3 className="text-sm font-bold text-slate-950">Kategoriler</h3><div className="mt-4 grid gap-2.5 text-sm text-slate-500"><a className="transition hover:text-blue-600" href="/laptop">Laptop</a><a className="transition hover:text-blue-600" href="/tablet">Tablet</a><a className="transition hover:text-blue-600" href="/gaming">Gaming</a><a className="transition hover:text-blue-600" href="/robot-supurge">Robot Süpürge</a></div></div>
      <div><h3 className="text-sm font-bold text-slate-950">Yasal</h3><div className="mt-4 grid gap-2.5 text-sm text-slate-500"><a className="transition hover:text-blue-600" href="/gizlilik">Gizlilik</a><a className="transition hover:text-blue-600" href="/kvkk">KVKK</a><a className="transition hover:text-blue-600" href="/kullanim-kosullari">Kullanım Koşulları</a><a className="transition hover:text-blue-600" href="/affiliate">Affiliate Açıklaması</a></div></div>
    </div>
    <div className="border-t border-slate-100"><div className="container flex flex-col gap-2 py-5 text-xs leading-5 text-slate-400 sm:flex-row sm:items-center sm:justify-between"><span>© 2026 FiyatPilot</span><span>FiyatPilot bazı bağlantılardan komisyon kazanabilir.</span></div></div>
  </footer>;
}
