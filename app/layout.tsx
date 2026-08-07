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
  title: 'Wyoming Clinic of Chiropractic | Sheridan, WY | Gonstead Care',
  description: 'Specific chiropractic healthcare for the whole family in Sheridan, Wyoming. Gonstead technique specialists offering corrective exercises, massage therapy, nutritional counseling, and more.',
  keywords: 'chiropractor, chiropractic, Sheridan, Wyoming, Gonstead, spinal care, back pain, massage therapy',
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
