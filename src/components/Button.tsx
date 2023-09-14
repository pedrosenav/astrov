import { ComponentProps, FC } from 'react'
import { VariantProps, cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  [
    'font-semibold',
    'rounded-lg',
    'transition-colors',
    'duration-300',
    'no-underline',
    'hover:no-underline',
    'w-fit',
  ],
  {
    variants: {
      variant: {
        primary: 'bg-sky-600 hover:bg-sky-500 hover:text-white',
        secondary:
          'bg-white/5 backdrop-blur border border-white/50 hover:bg-white/40 shadow',
        outline: 'border-2 border-sky-600 hover:bg-sky-600 hover:text-white',
      },
      size: {
        lg: 'text-lg py-2 px-5 min-w-[7rem]',
        md: 'text-normal py-1.5 px-4 min-w-[6rem]',
        sm: 'text-sm py-1 px-3 min-w-[5rem]',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
)

interface ButtonProps
  extends ComponentProps<'button'>,
    VariantProps<typeof buttonVariants> {}

const Button: FC<ButtonProps> = ({
  size,
  variant,
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={cn(buttonVariants({ size, variant, className }))}
      {...props}
    >
      {children}
    </button>
  )
}

export { Button, buttonVariants }
