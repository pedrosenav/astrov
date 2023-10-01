interface NavigationProps {
  title: string
  url: string
}
const Navigation: NavigationProps[] = [
  {
    title: 'Process',
    url: '/#process',
  },
  {
    title: 'About me',
    url: '/#about',
  },
  {
    title: 'Gallery',
    url: 'gallery',
  },
  {
    title: 'Get in touch',
    url: '/#contact',
  },
]
export { Navigation, type NavigationProps }
