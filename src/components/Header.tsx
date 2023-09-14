'use client'

import Link, { LinkProps } from 'next/link'
import { ComponentProps } from 'react'
import { Nav } from '@/lib/nav'

import { cn } from '@/lib/utils'
import Container from './Container'

import { List } from '@phosphor-icons/react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { buttonVariants } from './Button'
import AstrovLogo from './Astrov-Logo'

type NavLinkProps = LinkProps & ComponentProps<'a'>

function NavLink({ children, href, className }: NavLinkProps) {
  return (
    <Link
      className={cn(
        children === 'Contact' &&
          buttonVariants({ variant: 'outline', size: 'sm' }),
        'decoration-transparent underline-offset-8 transition-all duration-300 hover:text-sky-600 hover:underline hover:decoration-sky-600',
        className,
      )}
      href={href}
    >
      {children}
    </Link>
  )
}

type HeaderProps = ComponentProps<'header'>

export default function Header({ className, ...props }: HeaderProps) {
  return (
    <header {...props} className={cn('sticky top-0 z-50 bg-white', className)}>
      <Container className="flex items-center justify-between py-4">
        <AstrovLogo className="h-4 fill-slate-800" />

        <nav className="hidden items-center gap-4 text-slate-900 sm:flex">
          {Nav.map((link) => (
            <NavLink key={link.title} href={link.url}>
              {link.title}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu */}
        <Sheet modal={false}>
          <SheetTrigger className="sm:hidden">
            <List size={28} weight="bold" />
          </SheetTrigger>
          <SheetContent className="flex flex-col border-zinc-50/10 bg-white py-12">
            {Nav.map((link) => (
              <NavLink key={link.title} href={link.url}>
                {link.title}
              </NavLink>
            ))}
          </SheetContent>
        </Sheet>
      </Container>
    </header>
  )
}
