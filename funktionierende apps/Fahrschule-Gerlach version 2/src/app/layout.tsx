import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { PageTransition } from '@/components/ui/PageTransition'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fahrschule Gerlach - Ihre Fahrschule in der Region',
  description: 'Professionelle Fahrausbildung mit hoher Bestehensquote. Führerschein Klasse B, B197, B96 und mehr. Jetzt anmelden!',
  keywords: 'Fahrschule, Führerschein, Fahrausbildung, Klasse B, B197, B96, Fahrstunden',
  authors: [{ name: 'Fahrschule Gerlach' }],
  creator: 'Fahrschule Gerlach',
  publisher: 'Fahrschule Gerlach',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://fahrschule-gerlach.de'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Fahrschule Gerlach - Ihre Fahrschule in der Region',
    description: 'Professionelle Fahrausbildung mit hoher Bestehensquote. Führerschein Klasse B, B197, B96 und mehr.',
    url: 'https://fahrschule-gerlach.de',
    siteName: 'Fahrschule Gerlach',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Fahrschule Gerlach',
      },
    ],
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fahrschule Gerlach - Ihre Fahrschule in der Region',
    description: 'Professionelle Fahrausbildung mit hoher Bestehensquote.',
    images: ['/og-image.jpg'],
  },
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        <PageTransition>
          <main className="min-h-screen">
            {children}
          </main>
        </PageTransition>
        <Footer />
      </body>
    </html>
  )
}
