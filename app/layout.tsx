import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/context/LanguageContext'
import { CallNowBanner } from '@/components/call-now-banner'
import './globals.css'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { WelcomeModal } from '@/components/welcome-modal'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-serif'
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-sans'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.drbundela.com'),
  // SEO TIP: Putting the location and service at the start of the title helps local ranking
  title: 'Best Homeopathy Clinic in Jhansi | Dr. R.S.S. Bundela - Natural Healing',
  description: 'Top-rated homeopathy clinic in Jhansi. Dr. R.S.S. Bundela provides expert natural treatments for hair loss, skin issues, thyroid, PCOS, and allergies. Safe and permanent healing solutions in Jhansi.',
  keywords: 'homeopathy clinic in Jhansi, best homeopath in Jhansi, natural healing Jhansi, hair loss treatment Jhansi, Dr. RSS Bundela, homeopathy doctor Jhansi',
  authors: [{ name: 'Dr. R.S.S. Bundela' }],
  alternates: {
    canonical: 'https://www.drbundela.com',
  },
  openGraph: {
    title: 'Dr. R.S.S. Bundela | Trusted Homeopathy Clinic in Jhansi',
    description: 'Expert homeopathic care for chronic diseases in Jhansi. Experience natural healing without side effects.',
    url: 'https://www.drbundela.com',
    siteName: 'Dr. R.S.S. Bundela Homeopathy',
    locale: 'en_IN',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#b03034',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Local Business Schema for Google Maps/Local Search
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    'name': 'Dr. R.S.S. Bundela Homeopathy Clinic',
    'alternateName': 'Bundela Homeopathy Jhansi',
    'url': 'https://www.drbundela.com',
    'logo': 'https://www.drbundela.com/logo.png', // Update with actual logo URL
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Jhansi',
      'addressRegion': 'Uttar Pradesh',
      'addressCountry': 'IN',
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '25.4484', // Standard Jhansi Lat
      'longitude': '78.5685', // Standard Jhansi Long
    },
    'description': 'Leading homeopathy clinic in Jhansi providing natural medical solutions.',
    'medicalSpecialty': 'Homeopathic',
  };

  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} bg-background`}>
      <head>
        {/* Injecting Local SEO Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased relative">
        <LanguageProvider>
        {children}
        <CallNowBanner />
        <WelcomeModal />
        </LanguageProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}