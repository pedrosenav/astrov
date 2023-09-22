import Hero from '@/components/sections/Hero-Section'
import Steps from '@/components/sections/Process-Section'
import About from '@/components/sections/About-Section'
import Projects from '@/components/sections/Projects-Section'
import Perks from '@/components/sections/Perks-Section'
import Contact from '@/components/sections/Contact-Section'

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
