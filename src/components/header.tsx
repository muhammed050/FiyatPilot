function Icon({ children, className = 'size-5' }: { children: React.ReactNode; className?: string }) {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className={className}>{children}</svg>;
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/95 backdrop-blur-xl">
      <div className="container flex min-h-16 items-center gap-3 py-2">
        <a href="/" aria-label="FiyatPilot ana sayfa" className="flex shrink-0 items-center gap-2.5">
          <span className="grid size-9 place-items-center rounded-[10px] bg-slate-950 text-white shadow-sm ring-1 ring-slate-900/5">
            <Icon className="size-[18px]"><path d="M4 17 9 12l3 3 7-8" /><path d="M19 7h-4" /></Icon>
          </span>
          <span className="text-[1.12rem] font-extrabold tracking-[-.04em]">Fiyat<span className="text-blue-600">Pilot</span></span>
        </a>

        <form action="/ara" className="relative hidden min-w-0 flex-1 md:flex md:max-w-[540px] lg:mx-5" role="search">
          <Icon className="absolute left-3 top-1/2 size-[18px] -translate-y-1/2 text-slate-400"><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></Icon>
          <input name="q" aria-label="Ürün ara" className="h-10 w-full rounded-[10px] border border-slate-200 bg-slate-50/70 py-2.5 pl-10 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10" placeholder="Ürün, marka veya kategori ara..." />
        </form>

        <nav aria-label="Ana navigasyon" className="ml-auto flex items-center gap-0.5">
          <a href="/firsatlar" className="hidden rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-slate-950 lg:block">Fırsatlar</a>
          <a href="/karsilastir" className="hidden rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-slate-950 lg:block">Karşılaştır</a>
          <a aria-label="Favoriler" title="Favoriler" className="grid size-10 place-items-center rounded-lg text-slate-600 transition hover:bg-slate-100 hover:text-slate-950" href="/favoriler">
            <Icon><path d="M20.8 8.6c0 5.4-8.8 10.2-8.8 10.2S3.2 14 3.2 8.6A4.6 4.6 0 0 1 12 6.3a4.6 4.6 0 0 1 8.8 2.3Z" /></Icon>
          </a>
          <a aria-label="Hesabım" title="Hesabım" className="grid size-10 place-items-center rounded-lg text-slate-600 transition hover:bg-slate-100 hover:text-slate-950" href="/hesabim">
            <Icon><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></Icon>
          </a>
          <a href="/giris" className="ml-1 hidden min-h-10 items-center rounded-[10px] border border-slate-200 px-4 text-sm font-bold text-slate-800 transition hover:bg-slate-50 sm:inline-flex">Giriş yap</a>
        </nav>
      </div>
      <div className="container pb-2 md:hidden">
        <form action="/ara" className="relative" role="search">
          <Icon className="absolute left-3 top-1/2 size-[18px] -translate-y-1/2 text-slate-400"><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></Icon>
          <input name="q" aria-label="Ürün ara" className="h-10 w-full rounded-[10px] border border-slate-200 bg-slate-50 py-2 pl-10 pr-3 text-sm outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10" placeholder="Ürün ara..." />
        </form>
      </div>
    </header>
  );
}
