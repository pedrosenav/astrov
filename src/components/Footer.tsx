'use client'

import Container from './Container'
import AstrovLogo from '@/components/Astrov-Logo'
import Link from 'next/link'
import { SocialProps, Social } from '@/lib/social'
import { Nav } from '@/lib/nav'
import VoidLogo from './Void-Logo'

interface FooterListProps {
  /* title: string */
  links: Array<{ url: string; text: string }>
}

function FooterList({ links }: FooterListProps) {
  return (
    <ul className="flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-400">
      {links.map((link) => (
        <li
          key={link.text}
          className="hover:text-astrov-400 hover:decoration-astrov-400 decoration-transparent underline-offset-4 transition-all duration-500 hover:underline"
        >
          <Link href={link.url}>{link.text}</Link>
        </li>
      ))}
    </ul>
  )
}

function SocialIcon({ icon: Icon, url, platformName }: SocialProps) {
  return (
    <Link href={url} title={platformName} target="_blank">
      <Icon
        size={28}
        weight="regular"
        className="fill-astrov-400 hover:fill-astrov-500 transition-all hover:scale-110"
      />
    </Link>
  )
}

export default function Footer() {
  const navLinks = Nav.map((nav) => {
    return {
      text: nav.title,
      url: nav.url,
    }
  })

  return (
    <footer className="bg-zinc-900">
      <Container className="flex flex-col items-center justify-between gap-10 py-8 sm:flex-row sm:items-start">
        <div className="space-y-1">
          <Link href={'/'}>
            <AstrovLogo className="h-6 fill-white" />
          </Link>
          <p className="flex items-center justify-center gap-1 fill-white text-sm text-white">
            Created by{' '}
            <Link href={'link-da-void'}>
              <VoidLogo className="h-2.5" />
            </Link>
          </p>
        </div>

        <FooterList links={navLinks} />

        <div className="flex items-center gap-4">
          {Social.map((social) => (
            <SocialIcon key={social.title} {...social} />
          ))}
        </div>
      </Container>
    </footer>
  )
}
