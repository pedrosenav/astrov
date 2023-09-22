'use client'

import Image, { StaticImageData } from 'next/image'
import { ComponentProps } from 'react'
import { Info } from '@phosphor-icons/react'

import { cn } from '@/lib/utils'
import Container from '../Container'

import sketch from '@/assets/images/steps/astrov-sketch.jpeg'
import baseColor from '@/assets/images/steps/astrov-base-color.jpeg'
import render from '@/assets/images/steps/astrov-render.jpeg'

interface StepProps extends ComponentProps<'div'> {
  title: string
  path: StaticImageData
  index: number
}

function Step({ title, path, index, className }: StepProps) {
  return (
    <div
      className={cn(
        'group relative flex w-fit flex-1 items-start justify-center transition-all md:w-full',
        className,
      )}
    >
      <Image
        src={path}
        alt={title}
        width={480}
        className="rounded-md shadow-lg duration-500 group-hover:scale-105"
      />

      {/* Separator */}
      <div className="mt-4 hidden h-[1px] w-full bg-slate-300 md:block">
        <div className="h-full w-0 bg-astrov-400 duration-500 group-hover:w-full"></div>
      </div>

      <div className="absolute left-0 m-2 flex items-start gap-3 rounded-full bg-white p-2 transition-all duration-500 group-hover:scale-105 md:relative md:m-0 md:bg-none md:p-0 md:group-hover:scale-100">
        {/* Index */}
        <span className="text-alt grid aspect-square h-8 shrink-0 place-content-center rounded-full border border-astrov-400 text-xl font-bold text-astrov-400/50 transition-colors delay-500 group-hover:text-astrov-400">
          {index}
        </span>
        {/* Title */}
        <h3 className="w-fit pr-2 font-alt text-xl text-slate-300 transition-colors group-hover:text-astrov-800 md:min-w-[9rem] md:pr-0 md:text-2xl">
          {title}
        </h3>
      </div>
    </div>
  )
}

export default function ProcessSection({ id }: { id: string }) {
  return (
    <section id={id}>
      <Container className="flex h-[52rem] max-w-6xl flex-col items-center justify-start gap-12 overflow-hidden py-12">
        <div className="space-y-4">
          {/* Title */}
          <h2 className="max-w-md text-center font-alt text-4xl font-bold text-astrov-600">
            Turn your imagination into reality in three steps
          </h2>
          {/* Caption */}
          <span className="mx-auto flex w-fit items-center gap-2 font-light text-slate-400">
            <Info size={20} /> You&apos;ll be up to date with all the steps of
            your artwork
          </span>
        </div>
        {/* Cards */}
        <div className="relative flex w-full flex-col items-center justify-center">
          <Step
            title={'Sketch'}
            index={1}
            path={sketch}
            className="peer peer-hover:opacity-10"
          />
          <Step
            title={'Base color'}
            index={2}
            path={baseColor}
            className="peer absolute top-1/2 peer-hover:opacity-10 lg:pl-32"
          />
          <Step
            title={'Painting and rendering'}
            index={3}
            path={render}
            className="peer absolute top-full peer-hover:opacity-10 lg:pl-64"
          />
        </div>
      </Container>
    </section>
  )
}
