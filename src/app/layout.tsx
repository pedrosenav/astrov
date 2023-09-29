/* eslint-disable camelcase */
import './globals.css'

import type { Metadata } from 'next'
import { Roboto_Flex, Figtree } from 'next/font/google'

import { Toaster } from '@/components/ui/toaster'
import { ThemeProvider } from '@/components/Theme-Provider'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const roboto = Roboto_Flex({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  display: 'swap',
  variable: '--font-roboto',
})
/* TODO: Usar uma fonte que PEGUE DIREITO NESSA PORRA */
const figtree = Figtree({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-figtree',
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
        className={`${roboto.variable} ${figtree.variable} bg-white font-sans text-slate-950 dark:bg-zinc-900 dark:text-white`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
