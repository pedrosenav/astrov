'use client'

import Container from '@/components/Container'
import { Button } from '../Button'
import AstrovLogo from '../Astrov-Logo'
import { ArrowRight } from '@phosphor-icons/react'

export default function HeroSection() {
  return (
    <section>
      <Container
        hero
        className="flex-wrap items-center justify-between bg-slate-500 p-4 sm:flex"
      >
        <div className="max-w-fit">
          <span className="flex w-fit">
            <AstrovLogo className="h-14 w-full fill-white" />
          </span>
          <ul className="flex max-w-full items-center justify-center gap-2 text-sky-300">
            <li className="h-[1px] w-full bg-sky-300"></li>
            <li className="min-w-fit">Freelance 2D Artist</li>
            <li className="h-[1px] w-full bg-sky-300"></li>
          </ul>
        </div>
        <Button
          className="flex items-center gap-1 self-end text-white"
          variant={'secondary'}
          size={'sm'}
        >
          View this project <ArrowRight weight="bold" />
        </Button>
      </Container>
    </section>
  )
}
