'use client'

import { ArrowUpRight } from '@phosphor-icons/react'

import Container from '../Container'
import Image from 'next/image'
import Link from 'next/link'

import image1 from '@/assets/images/projects/projects-1.jpg'
import image2 from '@/assets/images/projects/projects-2.jpg'
import image3 from '@/assets/images/projects/projects-3.jpg'
import image4 from '@/assets/images/projects/projects-4.jpg'

import Halftone from '../Halftone'
import { buttonVariants } from '../Button'
import { cn } from '@/lib/utils'

export default function ProjectsSection() {
  return (
    <section className="py-8">
      <Container className="flex max-h-[35rem] w-full items-center justify-between overflow-clip lg:pl-14">
        <div className="relative h-full w-fit justify-self-start">
          {/* Gradient */}
          <div className="absolute -left-20 bottom-24 z-10 h-20 w-[44rem] bg-gradient-to-t from-white from-40% to-transparent"></div>

          {/* Images */}
          <div className="flex translate-x-4 rotate-12 gap-4 opacity-50 lg:opacity-100">
            <div className="flex flex-col gap-4 pt-24">
              <Image
                className="translate-all h-[20rem] w-72 min-w-[15rem] rounded-lg object-cover shadow-xl duration-300 hover:scale-105"
                src={image1}
                alt={''}
              />
              <Image
                className="translate-all min-h-[20rem] w-72 min-w-[15rem] rounded-lg object-cover shadow-xl duration-300 hover:scale-105"
                src={image2}
                alt={''}
              />
            </div>
            <div className="flex flex-col gap-4">
              <Image
                className="translate-all min-h-[20rem] w-72 min-w-[15rem] rounded-lg object-cover shadow-xl duration-300 hover:scale-105"
                src={image3}
                alt={''}
              />
              <Image
                className="translate-all min-h-[20rem] w-72 min-w-[15rem] rounded-lg object-cover shadow-xl duration-300 hover:scale-105"
                src={image4}
                alt={''}
              />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="absolute left-0 right-0 z-20 m-auto flex h-fit w-full max-w-[28rem] flex-col items-start justify-between gap-10 overflow-clip rounded-xl bg-gradient-to-t from-astrov-400 to-astrov-500 p-8 shadow-xl lg:relative lg:m-0">
          <h1 className="font-alt text-5xl font-bold text-white">
            Check out more of my work
          </h1>

          <Link
            href={'/projects'}
            className={cn(
              'flex items-center justify-center gap-1 text-astrov-800',
              buttonVariants({ variant: 'secondary', size: 'lg' }),
            )}
          >
            View projects <ArrowUpRight weight="bold" />
          </Link>

          <Halftone className="absolute -right-28 top-24 h-80 w-80 fill-white opacity-30" />
        </div>
      </Container>
    </section>
  )
}
