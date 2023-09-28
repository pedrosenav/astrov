import {
  EnvelopeSimple,
  InstagramLogo,
  RedditLogo,
  TwitterLogo,
} from '@phosphor-icons/react'
import ArtStationLogo from '@/components/ArtStation-Logo'
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
    platformName: 'Twitter',
    icon: TwitterLogo,
  },
  {
    title: '@astrovart',
    url: 'https://www.artstation.com/arthurmagalhaes',
    platformName: 'ArtStation',
    icon: ArtStationLogo,
  },
  {
    title: 'astrovart1@gmail.com',
    url: 'mailto:astrovart1@gmail.com',
    platformName: 'E-mail',
    icon: EnvelopeSimple,
  },
]

export { Social, type SocialProps }
