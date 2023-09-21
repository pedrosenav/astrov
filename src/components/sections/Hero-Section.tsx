'use client'

import { ArrowUpRight } from '@phosphor-icons/react'

import { Button } from '../Button'
import AstrovLogo from '../Astrov-Logo'
import Carousel from '../Carousel'

export default function HeroSection() {
  return (
    <section className="relative flex min-h-fit flex-col items-center justify-center overflow-hidden bg-white">
      <Carousel />
      {/* FIXME: Mudar altura do carrossel para o mobile */}

      <div className="margin-auto absolute top-80 z-20 w-full max-w-[30rem] p-5 md:left-20 md:m-0 ">
        <span className="flex w-full">
          <AstrovLogo className="w-full fill-white" />
        </span>

        <ul className="flex max-w-full items-center justify-center gap-2 text-astrov-400">
          <li className="h-[1px] w-full bg-astrov-400"></li>
          <li className="min-w-fit font-alt text-xl tracking-wider">
            Freelance 2D Artist
          </li>
          <li className="h-[1px] w-full bg-astrov-400"></li>
        </ul>
      </div>

      <Button
        className="absolute bottom-14 z-20 m-auto flex items-center gap-1 text-white md:right-20 md:m-0"
        variant={'outline'}
        size={'lg'}
      >
        View this project <ArrowUpRight weight="bold" size={20} />
      </Button>
    </section>
  )
}
