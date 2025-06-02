import { Inter, Playfair_Display, Roboto } from 'next/font/google'
import './globals.css'
import Footer from "@/components/Footer/page";
import Navbar from "@/components/Navbar/page";
import { SpeedInsights } from "@vercel/speed-insights/next"
const inter = Inter({ subsets: ['latin'] })
const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-playfair',
})
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
})

export const metadata = {
  title: 'ZSpace Decore - Modern Interior Design Solutions',
  description: 'Transform your living space with ZSpace Decore. Expert interior design solutions combining elegance and comfort. Book a consultation for your dream home transformation.',
  keywords: 'interior design, home decor, space transformation, modern interior, design consultation',
  openGraph: {
    title: 'ZSpace Decore - Modern Interior Design Solutions',
    description: 'Transform your living space with ZSpace Decore. Expert interior design solutions combining elegance and comfort.',
    type: 'website',
    locale: 'en_US',
    siteName: 'ZSpace Decore',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ZSpace Decore - Modern Interior Design Solutions',
    description: 'Transform your living space with ZSpace Decore. Expert interior design solutions combining elegance and comfort.',
  },
  robots: 'index, follow',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <head>
        <link 
          rel="preload" 
          href="/neoclassical.jpg" 
          as="image" 
          type="image/jpeg"
          fetchPriority="high"
        />
      </head>
      <body className={`${inter.className} ${playfair.variable} ${roboto.variable} min-h-screen flex flex-col`}>
        <SpeedInsights/>
        <Navbar/>
        <main className="flex-grow">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}
