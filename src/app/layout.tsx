import Header from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Roboto_Flex as Roboto, Bayon } from 'next/font/google'
import Footer from '@/components/Footer'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  display: 'swap',
  variable: '--font-roboto',
})
const bayon = Bayon({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-bayon',
})

export const metadata: Metadata = {
  title: 'Astrov',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${bayon.variable} font-sans text-slate-950`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
