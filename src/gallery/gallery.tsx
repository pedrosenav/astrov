import React from 'react'
import ReactDOM from 'react-dom/client'
import '../index.css'

import { ThemeProvider } from "@/components/theme-provider"
import Gallery from '@/components/sections/gallery'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
     <Header />
     <Gallery />
     <Footer />
    </ThemeProvider>
  </React.StrictMode>
)