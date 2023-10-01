import Hero from '@/components/sections/Hero-Section'
import Steps from '@/components/sections/Process-Section'
import About from '@/components/sections/About-Section'
import Projects from '@/components/sections/Projects-Section'
import Perks from '@/components/sections/Perks-Section'
import Contact from '@/components/sections/Contact-Section'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Digital illustrator | ASTROV',
  description: 'Explore a wide variety of incredible drawings available for commission. Discover unique illustrations in various categories.',
}

export default function Home() {
  return (
    <>
      <Hero />
      <Steps id="process" />
      <Perks />
      <About id="about" />
      <Projects />
      <Contact id="contact" />
    </>
  )
}
