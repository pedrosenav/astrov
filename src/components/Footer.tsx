import Container from '@/components/Container'
import AstrovLogo from '@/components/Astrov-Logo'
import { SocialProps, Social } from '@/lib/social'
import { Navigation } from '@/lib/navigation'
import VoidLogo from '@/components/Void-logo'

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
          className="decoration-transparent underline-offset-4 transition-all duration-500 hover:text-astrov-400 hover:underline hover:decoration-astrov-400"
        >
          <a href={link.url}>{link.text}</a>
        </li>
      ))}
    </ul>
  )
}

function SocialIcon({ icon: Icon, url, platformName }: SocialProps) {
  return (
    <a href={url} title={platformName} target="_blank">
      <Icon
        size={28}
        weight="regular"
        className="fill-astrov-400 transition-all hover:scale-110 hover:fill-astrov-500"
      />
    </a>
  )
}

export default function Footer() {
  const navLinks = Navigation.map((nav) => {
    return {
      text: nav.title,
      url: nav.url,
    }
  })

  return (
    <footer className="bg-zinc-900">
      <Container className="flex flex-col items-center justify-between gap-10 py-12 md:flex-row md:items-start">
        <div className="space-y-1">
          <a href={'/'}>
            <AstrovLogo className="h-6 fill-white" />
          </a>
          <p className="flex items-center justify-center gap-1 fill-white text-sm text-white">
            Created by{' '}
            <a target="_blank" href={'https://github.com/pedrosenav'}>
              <VoidLogo className="h-2.5" />
            </a>
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
