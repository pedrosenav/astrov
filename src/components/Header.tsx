'use client'

import Link, { LinkProps } from 'next/link'
import { ComponentProps } from 'react'
import { Navigation } from '@/lib/nagivation'

import { cn } from '@/lib/utils'
import Container from './Container'

import { List } from '@phosphor-icons/react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import AstrovLogo from './Astrov-Logo'

type NavLinkProps = LinkProps & ComponentProps<'a'>

function NavLink({ children, href, className }: NavLinkProps) {
  return (
    <Link
      className={cn(
        'decoration-transparent underline-offset-8 transition-all duration-300 hover:text-astrov-400 hover:underline hover:decoration-astrov-400',
        children === Navigation.at(-1)?.title &&
          'rounded-md border-2 border-astrov-400 px-2 py-0.5 hover:no-underline',
        className,
      )}
      href={href}
    >
      {children}
    </Link>
  )
}

export default function Header() {
  return (
    <header className="sticky top-0 z-50 overflow-hidden bg-white shadow-lg">
      <Container className="flex items-center justify-between py-4">
        <Link href={'/'}>
          <AstrovLogo className="h-4 fill-slate-800" />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-4 text-slate-900 sm:flex">
          {Navigation.map((link) => (
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
            {Navigation.map((link) => (
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
