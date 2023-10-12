import { ArrowUpRight } from '@phosphor-icons/react'

import AstrovLogo from '@/components/Astrov-Logo'
import Carousel from '@/components/Carousel'
import { buttonVariants } from '../Button'
import { cn } from '@/lib/utils'

export default function HeroSection({ id }: { id: string }) {
  return (
    <section
      id={id}
      className="relative flex min-h-fit flex-col items-center justify-center overflow-hidden bg-white"
    >
      <Carousel />
      {/* Fixed */}

      <div className="margin-auto absolute z-20 w-full max-w-[30rem] p-5 md:left-20 md:m-0 lg:top-80">
        <h1 className="flex w-full">
          <AstrovLogo className="w-full fill-white" />
        </h1>

        <h2 className="flex max-w-full items-center justify-center gap-2 text-astrov-400">
          <span className="h-[1px] w-full bg-astrov-400"></span>
          <span className="min-w-fit font-alt text-xl tracking-wider">
            Freelance 2D Artist
          </span>
          <span className="h-[1px] w-full bg-astrov-400"></span>
        </h2>
      </div>

      <a
        className={cn(
          buttonVariants({ variant: 'outline', size: 'lg' }),
          'absolute bottom-14 z-20 m-auto flex items-center gap-1 text-white md:right-20 md:m-0',
        )}
        href={'/gallery'}
      >
        View gallery <ArrowUpRight weight="bold" size={20} />
      </a>
    </section>
  )
}
