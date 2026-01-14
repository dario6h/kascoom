import '../styles/globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import Navbar from '@/components/layout/navbar/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata = {
  metadataBase: new URL('https://kascoom.com'),
  title: {
    default: 'KASCOOM | شركة كرسي الساعة - Industrial Solutions in Saudi Arabia',
    template: '%s | KASCOOM',
  },
  description: 'KASCOOM (شركة كرسي الساعة) - Leading provider of industrial solutions, oil & gas services, civil construction, mechanical works, and manpower solutions in Saudi Arabia.',
  keywords: [
    'KASCOOM',
    'كرسي الساعة',
    'شركة كرسي الساعة',
    'industrial solutions Saudi Arabia',
    'oil and gas services KSA',
    'civil construction Jeddah',
    'mechanical works Saudi',
    'manpower solutions',
    'خدمات صناعية',
    'خدمات النفط والغاز',
    'البناء المدني',
    'الأعمال الميكانيكية',
  ],
  authors: [{ name: 'KASCOOM' }],
  creator: 'KASCOOM',
  publisher: 'KASCOOM',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'ar_SA',
    url: 'https://kascoom.com',
    siteName: 'KASCOOM',
    title: 'KASCOOM | شركة كرسي الساعة - Industrial Solutions in Saudi Arabia',
    description: 'KASCOOM (شركة كرسي الساعة) - Leading provider of industrial solutions, oil & gas services, civil construction, mechanical works, and manpower solutions in Saudi Arabia.',
    images: [
      {
        url: '/images/logo.png',
        width: 160,
        height: 53,
        alt: 'KASCOOM Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KASCOOM | شركة كرسي الساعة',
    description: 'Leading provider of industrial solutions in Saudi Arabia',
    images: ['/images/logo.png'],
  },
  alternates: {
    canonical: 'https://kascoom.com',
    languages: {
      'en': 'https://kascoom.com',
      'ar': 'https://kascoom.com',
    },
  },
  verification: {
    // Add your Google Search Console verification code here
    // google: 'your-google-verification-code',
  },
  manifest: '/manifest.json',
  category: 'Industrial Services',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <LanguageProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}