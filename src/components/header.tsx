function Icon({ children }: { children: React.ReactNode }) {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5">{children}</svg>;
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
      <div className="container flex h-16 items-center gap-5">
        <a href="/" className="flex items-center gap-2 font-black text-xl tracking-tight">
          <span className="grid size-9 place-items-center rounded-xl bg-blue-600 text-white">⌁</span>
          Fiyat<span className="text-blue-600">Pilot</span>
        </a>
        <form action="/ara" className="hidden md:flex flex-1 max-w-2xl relative">
          <span className="absolute left-3 top-3 text-slate-400">
            <Icon><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></Icon>
          </span>
          <input name="q" className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 outline-none focus:border-blue-500 focus:bg-white" placeholder="Laptop, telefon, robot süpürge..." />
        </form>
        <nav className="ml-auto flex items-center gap-1">
          <a aria-label="Favoriler" className="p-2 rounded-lg hover:bg-slate-100" href="/favoriler">
            <Icon><path d="M20.8 8.6c0 5.4-8.8 10.2-8.8 10.2S3.2 14 3.2 8.6A4.6 4.6 0 0 1 12 6.3a4.6 4.6 0 0 1 8.8 2.3Z" /></Icon>
          </a>
          <a aria-label="Karşılaştır" className="p-2 rounded-lg hover:bg-slate-100" href="/karsilastir">
            <Icon><path d="M8 3v18" /><path d="M4 7h8" /><path d="M4 17h8" /><path d="M16 3v18" /><path d="M12 7h8" /><path d="M12 17h8" /></Icon>
          </a>
          <a aria-label="Hesabım" className="p-2 rounded-lg hover:bg-slate-100" href="/hesabim">
            <Icon><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></Icon>
          </a>
        </nav>
      </div>
    </header>
  );
}
