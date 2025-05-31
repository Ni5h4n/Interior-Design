import { Inter } from 'next/font/google'
import './globals.css'
import Footer from "@/components/Footer/page";
import Navbar from "@/components/Navbar/page";

const inter = Inter({ subsets: ['latin'] })

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
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link 
          rel="preload" 
          href="/neoclassical.jpg" 
          as="image" 
          type="image/jpeg"
          fetchPriority="high"
        />
      </head>
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
