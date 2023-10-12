import { ComponentProps, useState } from 'react'

import Container from '@/components/Container'
import Halftone from '@/components/Halftone'
import { cn } from '@/lib/utils'
import image6 from '@/assets/images/carousel/6.jpg'
import image3 from '@/assets/images/carousel/3.jpeg'
interface PerkProps extends ComponentProps<'div'> {
  image: string | undefined
  isExpanded: boolean
}

function Perk({ image, title, className, isExpanded, ...props }: PerkProps) {
  return (
    <div
      {...props}
      className={cn(
        isExpanded
          ? 'basis-2/4 text-white saturate-100'
          : 'basis-1/4 text-transparent saturate-0',
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
      <picture>
        <img
          src={image}
          alt={title}
          className="min-h-full w-full object-cover"
        />
      </picture>
    </div>
  )
}

const perkList = [
  {
    image:
      'https://cdna.artstation.com/p/assets/images/images/058/272/124/large/astrov-sl3.jpg?1673796619',
    title: 'Unleash your creativity and eternalize your ideas',
  },
  {
    image: image6,
    title: 'Gather your friends and roll the dice',
  },
  {
    image: image3,
    title: 'Add your beloved pet to your artwork',
  },
]

export default function PerksSection({ id }: { id: string }) {
  const [expanded, setExpanded] = useState<number>(0)
  function handleMouseOver(i: number) {
    setExpanded(i)
  }

  return (
    <section id={id} className='dark:bg-zinc-900' >
      <Container className="space-y-8 py-12">
        <div className="flex flex-col items-end justify-center gap-4 lg:flex-row">
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
