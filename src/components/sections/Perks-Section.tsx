'use client'

import Image from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import { ComponentProps, useState } from 'react'

import Container from '../Container'
import Halftone from '../Halftone'
import { cn } from '@/lib/utils'

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
        isExpanded ? 'basis-2/4 text-white ' : 'basis-1/4 text-transparent',
        'group relative h-[10rem] overflow-clip rounded-md transition-all duration-700 md:min-h-full',
        className,
      )}
    >
      {/* Title */}
      <p className="absolute bottom-0 z-20 p-5 text-2xl transition-all delay-0 duration-0 ease-out group-hover:delay-150 group-hover:duration-500 group-hover:ease-in">
        {title}
      </p>
      {/* Gradient */}
      <div className="absolute h-full w-full bg-gradient-to-t from-astrov-600 to-transparent to-50% transition-all"></div>
      <Halftone className="absolute -bottom-1/4 -right-20 h-3/4 fill-astrov-600 md:-right-1/2" />
      <Image
        width={1000}
        height={1000}
        src={image}
        alt="Image"
        className="min-h-full object-cover"
      />
    </div>
  )
}

const perkList = [
  {
    image:
      'https://instagram.fsdu2-2.fna.fbcdn.net/v/t51.2885-15/321153707_486585883603928_2432150126918011247_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fsdu2-2.fna.fbcdn.net&_nc_cat=108&_nc_ohc=ktX6JBbdXVQAX8Jcw4s&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=Mjk5OTg2NjIzNDExNjEwNzk2Mw%3D%3D.2-ccb7-5&oh=00_AfCdLyNcsTgeSJLS1BnPyQbrn0COin7qpXcSAzxx9z-z0Q&oe=6516F55E&_nc_sid=b41fef',
    title: 'Gather your friends and roll the dice',
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
  function handleMouseOver(i: number) {
    setExpanded(i)
  }

  return (
    <section>
      <Container className="space-y-8 py-12">
        <div className="flex flex-col items-center justify-center gap-4 lg:flex-row">
          {/* Title */}
          <div className="space-y-2">
            <h4 className="w-full text-center tracking-wider text-slate-400 lg:text-left">
              Customization
            </h4>
            <h3 className="max-w-sm text-center font-alt text-4xl font-bold text-astrov-600 dark:text-astrov-500 md:text-start">
              Make your art even more unique to you
            </h3>
          </div>
          {/* Caption */}
          <p className="max-w-lg text-center text-slate-400 md:text-start">
            Turn your epic RPG memories into timeless art! Let us capture the
            essence of your characters in a stunning illustration that will
            forever remind you of the legendary adventures you&apos;ve shared
            together
          </p>
        </div>
        {/* Cards */}
        <div className="relative flex h-[53rem] flex-col gap-6 md:h-96 md:flex-row">
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
