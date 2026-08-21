import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const inter = Inter({ subsets: ['latin'], display: 'swap' });
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://fiyatpilot.com'),
  title: { default: 'FiyatPilot | En İyi Ürünler, Fiyat Karşılaştırma ve Akıllı Alışveriş', template: '%s | FiyatPilot' },
  description: 'Türkiye’de ürünleri karşılaştır, güncel fiyatları takip et ve bütçene en uygun ürünü FiyatPilot ile bul.',
  robots: { index: true, follow: true },
  openGraph: { type: 'website', locale: 'tr_TR', siteName: 'FiyatPilot', title: 'FiyatPilot | Akıllı alışveriş. Doğru karar.', description: 'Bütçene ve kullanım amacına göre doğru ürünü bul.' },
};
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="tr" suppressHydrationWarning><body className={inter.className}><Header />{children}<Footer /></body></html>;
}
