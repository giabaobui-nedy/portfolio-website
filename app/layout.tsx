import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { GlobalFloatingNotes } from './components/music'
import { baseUrl } from './sitemap'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Gia Bao Bui — Software Engineer',
    template: '%s | Gia Bao Bui',
  },
  description:
    'Software Engineer with experience building production-grade, API-driven systems. Strong foundation in TypeScript, Python, React, and cloud-native AWS environments.',
  openGraph: {
    title: 'Gia Bao Bui — Software Engineer',
    description:
      'Software Engineer with experience building production-grade, API-driven systems across frontend and backend services.',
    url: baseUrl,
    siteName: 'Gia Bao Bui',
    locale: 'en_US',
    type: 'website',
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

const cx = (...classes) => classes.filter(Boolean).join(' ')

const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}else{document.documentElement.classList.remove('dark')}}catch(e){}})();`

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="antialiased max-w-2xl mx-4 mt-8 lg:mx-auto relative">
        <GlobalFloatingNotes />
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0 relative z-10">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}
