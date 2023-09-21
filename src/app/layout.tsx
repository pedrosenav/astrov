import Header from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import {
  Roboto_Flex as Roboto,
  Bricolage_Grotesque as Bricolage,
} from 'next/font/google'
import Footer from '@/components/Footer'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  display: 'swap',
  variable: '--font-roboto',
})
const bricolage = Bricolage({
  subsets: ['latin'],
  weight: ['300', '400', '700', '800'],
  display: 'swap',
  variable: '--font-bricolage',
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
        className={`${roboto.variable} ${bricolage.variable} bg-white font-sans text-slate-950`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
