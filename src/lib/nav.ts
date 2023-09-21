interface NavProps {
  title: string
  url: string
}
const Nav: NavProps[] = [
  {
    title: 'Steps',
    url: '/#steps',
  },
  {
    title: 'About me',
    url: '/#about',
  },
  {
    title: 'Art styles',
    url: '/#',
  },
  {
    title: 'Projects',
    url: 'projects',
  },
  {
    title: 'Get in touch',
    url: '/#contact',
  },
]
export { Nav, type NavProps }
