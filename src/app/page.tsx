import Hero from '@/components/sections/Hero-Section'
import Steps from '@/components/sections/Steps-Section'
import About from '@/components/sections/About-Section'
import Projects from '@/components/sections/Projects-Section'
import Perks from '@/components/sections/Perks-Section'

export default function Home() {
  return (
    <>
      <Hero />
      <Steps />
      <Perks />
      <About />
      <Projects />
    </>
  )
}
