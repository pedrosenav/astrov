import { ArrowUpRight } from '@phosphor-icons/react'

import Container from '@/components/Container'

import image1 from '@/assets/images/projects/projects-1.jpg'
import image2 from '@/assets/images/projects/projects-2.jpg'
import image3 from '@/assets/images/projects/projects-3.jpg'
import image4 from '@/assets/images/projects/projects-4.jpg'

import Halftone from '@/components/Halftone'
import { buttonVariants } from '@/components/Button'
import { cn } from '@/lib/utils'

export default function ProjectsSection() {
  return (
    <section className="py-8 dark:bg-zinc-900">
      <Container className="flex max-h-[35rem] w-full items-center justify-between overflow-clip ">
        <div className="relative h-full w-fit justify-self-start">
          {/* Gradient */}
          <div className="absolute -left-20 bottom-24 z-10 h-20 w-[44rem] bg-gradient-to-t from-white from-40% to-transparent dark:from-zinc-900"></div>

          {/* Images */}
          <div className="flex translate-x-4 rotate-12 gap-4 opacity-50 lg:opacity-100">
            <div className="flex flex-col gap-4 pt-24">
              <img
                className="translate-all h-[20rem] w-72 min-w-[15rem] rounded-lg object-cover shadow-xl duration-300 hover:scale-105"
                src={image1}
                alt={'A very fast runner, made for personal study.'}
              />
              <img
                className="translate-all min-h-[20rem] w-72 min-w-[15rem] rounded-lg object-cover shadow-xl duration-300 hover:scale-105"
                src={image2}
                alt={
                  'Lilith, the primal necromancer of shadows, commands undead and manipulates death energies in search of supremacy and destruction. Feared by all.'
                }
              />
            </div>
            <div className="flex flex-col gap-4">
              <img
                className="translate-all min-h-[20rem] w-72 min-w-[15rem] rounded-lg object-cover shadow-xl duration-300 hover:scale-105"
                src={image3}
                alt={
                  'A man in a hood with a bag of coins in his hand, fanart of Dungeons and Dragons rogue character.'
                }
              />
              <img
                className="translate-all min-h-[20rem] w-72 min-w-[15rem] rounded-lg object-cover shadow-xl duration-300 hover:scale-105"
                src={image4}
                alt={'A man with fire powers.'}
              />
            </div>
          </div>
        </div>

        {/* Card */}
        <div className="absolute left-0 right-0 z-20 mx-auto flex h-fit max-w-xs flex-col items-start justify-between gap-10 overflow-clip rounded-xl bg-gradient-to-t from-astrov-400 to-astrov-500 p-8 shadow-xl sm:max-w-md lg:relative lg:m-0">
          <h1 className="font-alt text-5xl font-bold text-white">
            Check out more of my work
          </h1>

          <a
            href={'gallery'}
            className={cn(
              'z-30 flex items-center justify-center gap-1 text-astrov-800',
              buttonVariants({ variant: 'secondary', size: 'lg' }),
            )}
          >
            View projects <ArrowUpRight weight="bold" />
          </a>

          <Halftone className="absolute -right-28 top-24 h-80 w-80 fill-white opacity-30" />
        </div>
        {/* GLow */}
        <div className="absolute bottom-40 right-24 h-32 w-96 bg-astrov-400 blur-3xl dark:bg-astrov-600/80"></div>
      </Container>
    </section>
  )
}
