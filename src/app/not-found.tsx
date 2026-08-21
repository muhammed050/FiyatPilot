import Link from 'next/link';

export default function NotFound() {
  return <main className="container grid min-h-[60vh] place-items-center py-16"><section className="max-w-lg text-center"><p className="text-sm font-extrabold uppercase tracking-[.14em] text-blue-600">404</p><h1 className="mt-3 text-4xl font-black">Aradığın sayfayı bulamadık</h1><p className="mt-3 leading-7 text-slate-600">Bağlantı değişmiş veya sayfa artık mevcut olmayabilir. Ürünlere ve fırsatlara aşağıdan devam edebilirsin.</p><div className="mt-7 flex flex-wrap justify-center gap-3"><Link href="/" className="btn btn-primary">Ana sayfaya dön</Link><Link href="/firsatlar" className="btn btn-secondary">Fırsatları keşfet</Link><Link href="/laptop" className="btn btn-secondary">Laptoplara bak</Link></div></section></main>;
}
