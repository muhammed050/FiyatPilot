import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://fiyatpilot.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'FiyatPilot | Fiyat Karşılaştırma ve Akıllı Alışveriş',
    template: '%s | FiyatPilot',
  },
  description: 'Türkiye’de ürün fiyatlarını karşılaştır, fırsatları keşfet ve bütçene en uygun ürünü daha bilinçli seç.',
  applicationName: 'FiyatPilot',
  keywords: ['fiyat karşılaştırma', 'ürün fiyatları', 'indirimli ürünler', 'alışveriş', 'Türkiye'],
  alternates: { canonical: '/' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    siteName: 'FiyatPilot',
    title: 'FiyatPilot | Akıllı alışveriş. Doğru karar.',
    description: 'Fiyatları karşılaştır, fırsatları keşfet ve satın almadan önce daha doğru karar ver.',
    url: '/',
  },
  twitter: { card: 'summary_large_image', title: 'FiyatPilot | Fiyat Karşılaştırma', description: 'Türkiye’de ürünleri ve fiyatları daha akıllı karşılaştır.' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="tr" suppressHydrationWarning><body><Header />{children}<Footer /></body></html>;
}
