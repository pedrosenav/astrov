'use client'

import Image from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import { ComponentProps, useState } from 'react'

import Container from '../Container'
import Halftone from '../Halftone'
import { cn } from '@/lib/utils'

import image1 from '@/assets/images/carousel/1.jpg'
import image2 from '@/assets/images/carousel/2.jpeg'
import image3 from '@/assets/images/carousel/3.jpeg'

interface PerkProps extends ComponentProps<'div'> {
  image: string | StaticImport
  isExpanded: boolean
}

function Perk({ image, title, className, isExpanded, ...props }: PerkProps) {
  return (
    <div
      {...props}
      className={cn(
        isExpanded ? 'basis-2/4' : 'basis-1/4',
        'relative min-h-fit overflow-clip rounded-md transition-all duration-500',
        className,
      )}
    >
      <p className="absolute bottom-0 z-20 p-5 text-2xl text-white">{title}</p>
      {/* Gradient */}
      <div className="absolute h-full w-full bg-gradient-to-t from-astrov-600 to-transparent to-50% transition-all"></div>
      <Halftone className="absolute -bottom-1/4 -right-20 h-3/4 fill-astrov-600 md:-right-1/2" />
      <Image src={image} alt="Image" className="min-h-full object-cover" />
    </div>
  )
}

const perkList = [
  {
    image: image1,
    title: 'Add your beloved pet to your artwork',
  },
  {
    image: image2,
    title: 'Add your beloved pet to your artwork',
  },
  {
    image: image3,
    title: 'Add your beloved pet to your artwork',
  },
]

export default function PerksSection() {
  const [expanded, setExpanded] = useState<number>(0)
  /* TODO: trocar os perks com tempo */

  function handleMouseOver(i: number) {
    setExpanded(i)
  }

  return (
    <section>
      <Container className="space-y-8 py-12">
        <div className="flex flex-col gap-4 lg:flex-row">
          {/* Title */}
          <h3 className="max-w-sm font-alt text-4xl font-bold text-astrov-600">
            Make your art even more unique to you
          </h3>
          {/* Caption */}
          <p className="max-w-lg text-slate-400">
            Turn your epic RPG memories into timeless art! Let us capture the
            essence of your characters in a stunning illustration that will
            forever remind you of the legendary adventures you&apos;ve shared
            together
          </p>
        </div>
        {/* Cards */}
        <div className="relative flex h-fit flex-col gap-6 md:h-96 md:flex-row">
          {perkList.map((perk, i) => (
            <Perk
              key={perk.title}
              {...perk}
              isExpanded={expanded === i}
              onMouseOver={() => handleMouseOver(i)}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
