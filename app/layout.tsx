import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { StructuredData } from '@/components/structured-data'
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
  title: 'Wyoming Clinic of Integrated Health | Chiropractic, Massage & Medical Care | Sheridan, WY',
  description: 'Gonstead chiropractic, therapeutic massage, and cash-pay medical care for the whole family in Sheridan, Wyoming. Now scheduling general medical care with Gordon Hendrickson, PA-C.',
  keywords: 'chiropractor, chiropractic, physician assistant, primary care, cash pay clinic, medical clinic, Sheridan, Wyoming, Gonstead, spinal care, back pain, massage therapy, Gordon Hendrickson',
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
    <html lang="en" className="bg-background">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <StructuredData />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
