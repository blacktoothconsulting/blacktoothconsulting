import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { StructuredData } from '@/components/structured-data'
import { ThemeProvider } from '@/components/theme-provider'
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
  description: 'Gonstead chiropractic, therapeutic massage, and straightforward medical care for the whole family in Sheridan, Wyoming. Now scheduling general medical care with Gordon Hendrickson, PA-C.',
  keywords: 'chiropractor, chiropractic, physician assistant, primary care, straightforward medical care, medical clinic, Sheridan, Wyoming, Gonstead, spinal care, back pain, massage therapy, Gordon Hendrickson',
  icons: {
    icon: '/horse-favicon.png',
    apple: '/horse-favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <a
            href="#main-content"
            className="sr-only rounded-md bg-primary px-4 py-2 font-medium text-primary-foreground focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:shadow-lg"
          >
            Skip to content
          </a>
          <StructuredData />
          {children}
          {process.env.NODE_ENV === 'production' && <Analytics />}
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  )
}
