'use client'

import AstrovLogo from '@/components/Astrov-Logo'
import { buttonVariants } from '@/components/Button'
import Container from '@/components/Container'
import { cn } from '@/lib/utils'
import { ArrowLeft } from '@phosphor-icons/react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <section>
      <Container className="flex min-h-screen flex-col items-center justify-center gap-10">
        <AstrovLogo className="h-6 fill-slate-950 dark:fill-white" />
        <div className="flex max-w-md flex-col items-center gap-3 text-center">
          {/* <h4 className="text-center tracking-wider text-slate-400">404</h4> */}
          <h1 className="font-alt text-5xl font-bold">
            This page does not exist...
          </h1>
          <p className="text-slate-400 ">
            Oops! It seems like you&apos;ve stumbled upon the wrong path
          </p>
        </div>
        <Link
          className={cn(
            buttonVariants({ size: 'lg', variant: 'primary' }),
            'flex items-center gap-2',
          )}
          href={'/'}
        >
          <ArrowLeft weight="bold" size={20} />
          Return to home
        </Link>
      </Container>
    </section>
  )
}
