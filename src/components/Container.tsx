import { ComponentProps } from 'react'
import { cn } from '@/lib/utils'

type ContainerProps = ComponentProps<'div'> & { hero?: boolean }

export default function Container({
  children,
  className,
  hero = false,
}: ContainerProps) {
  return (
    <div
      className={cn('relative mx-auto max-w-7xl', !hero && 'px-6', className)}
    >
      {children}
    </div>
  )
}
