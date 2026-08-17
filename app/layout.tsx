import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair'
});

export const metadata: Metadata = {
  title: 'The Wyoming Clinic | Chiropractic & Medical Care | Sheridan, WY',
  description: 'Chiropractic and general medical care for the whole family in Sheridan, Wyoming. Home of Gonstead chiropractic care and now offering general healthcare with Gordon Hendrickson, PA.',
  keywords: 'chiropractor, chiropractic, physician assistant, primary care, medical clinic, Sheridan, Wyoming, Gonstead, spinal care, back pain, massage therapy, Gordon Hendrickson',
  icons: {
    icon: '/images/logo.avif',
    apple: '/images/logo.avif',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
