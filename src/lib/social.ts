import {
  AngularLogo,
  EnvelopeSimple,
  InstagramLogo,
  RedditLogo,
  TwitterLogo,
} from '@phosphor-icons/react'
import { ElementType } from 'react'

interface SocialProps {
  title: string
  url: string
  platformName: string
  icon: ElementType
}

const Social: SocialProps[] = [
  {
    title: '@astrov_art',
    url: 'https://www.instagram.com/astrov_art',
    platformName: 'Instagram',
    icon: InstagramLogo,
  },
  {
    title: '/astrov_art',
    url: 'https://www.reddit.com/user/astrov_art',
    platformName: 'Reddit',
    icon: RedditLogo,
  },
  {
    title: '@astrovart',
    url: 'https://twitter.com/astrovart',
    platformName: 'Reddit',
    icon: TwitterLogo,
  },
  {
    title: '@astrovart',
    url: 'https://www.artstation.com/arthurmagalhaes',
    platformName: 'Artstation',
    icon: AngularLogo,
  },
  {
    title: 'astrovart1@gmail.com',
    url: 'astrovart1@gmail.com',
    platformName: 'E-mail',
    icon: EnvelopeSimple,
  },
]

export { Social, type SocialProps }
