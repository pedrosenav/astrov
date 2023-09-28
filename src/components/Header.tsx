'use client'

import Link, { LinkProps } from 'next/link'
import { ComponentProps } from 'react'
import { Navigation } from '@/lib/nagivation'

import { cn } from '@/lib/utils'
import Container from './Container'
import AstrovLogo from './Astrov-Logo'

import { List, Sun, Moon } from '@phosphor-icons/react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { useTheme } from 'next-themes'

type NavLinkProps = LinkProps & ComponentProps<'a'>

function NavLink({ children, href, className }: NavLinkProps) {
  return (
    <Link
      className={cn(
        'decoration-transparent underline-offset-8 transition-all duration-300 hover:text-astrov-400 hover:underline hover:decoration-astrov-400',
        children === Navigation.at(-1)?.title &&
          '-translate-x-2 rounded-md border-2 border-astrov-400 px-2 py-0.5 hover:no-underline sm:-translate-x-0',
        className,
      )}
      href={href}
    >
      {children}
    </Link>
  )
}

function ThemeSwitcher() {
  const { setTheme, theme } = useTheme()

  return (
    <button
      className="group rounded-lg p-1"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      {theme === 'dark' ? (
        <Sun
          size={24}
          className="transition-colors group-hover:fill-astrov-400"
        />
      ) : (
        <Moon
          size={24}
          className="transition-colors group-hover:fill-astrov-400"
        />
      )}
    </button>
  )
}

export default function Header() {
  return (
    <header className="sticky top-0 z-50 overflow-hidden bg-white shadow-lg dark:bg-zinc-900">
      <Container className="flex items-center justify-between py-4">
        <Link href={'/'}>
          <AstrovLogo className="h-4 fill-slate-800 dark:fill-white" />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-4 text-slate-900 dark:text-white sm:flex">
          {Navigation.map((link) => (
            <NavLink key={link.title} href={link.url}>
              {link.title}
            </NavLink>
          ))}
          <ThemeSwitcher />
        </nav>

        {/* Mobile Menu */}
        <Sheet modal={false}>
          <SheetTrigger className="sm:hidden">
            <List size={28} weight="bold" />
          </SheetTrigger>
          <SheetContent className="flex  w-[15rem] flex-col border-zinc-50/10 bg-white py-12 dark:bg-zinc-900">
            {Navigation.map((link) => (
              <NavLink key={link.title} href={link.url}>
                {link.title}
              </NavLink>
            ))}
            <ThemeSwitcher />
          </SheetContent>
        </Sheet>
      </Container>
    </header>
  )
}
