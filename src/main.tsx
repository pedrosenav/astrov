import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { ThemeProvider } from "./components/theme-provider"
import AboutSection from './components/sections/About-Section'
import HeroSection from './components/sections/Hero-Section'
import PerksSection from './components/sections/Perks-Section'
import ProcessSection from './components/sections/Process-Section'
import ProjectsSection from './components/sections/Projects-Section'
import Header from './components/Header'
import Footer from './components/Footer'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />
      <HeroSection id="hero" />
      <ProcessSection id="process" />
      <PerksSection id="perks" />
      <AboutSection id="about" />
      <ProjectsSection />
      <Footer />
    </ThemeProvider>                                                            
  </React.StrictMode>
)

