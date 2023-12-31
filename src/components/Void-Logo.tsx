import { ComponentProps } from 'react'

type VoidLogoProps = ComponentProps<'svg'>

export default function VoidLogo({ className }: VoidLogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1464 400.07"
      className={className}
    >
      <title>Void</title>
      <g id="Void">
        <g id="D">
          <path d="M1264,.07H1064v400h100v-300h98.84c54.08,0,100.23,44.21,101.14,98.27a100,100,0,0,1-100,101.73v100h0c110.46,0,200-89.54,200-200h0C1464,89.61,1374.46.07,1264,.07Z" />
        </g>
        <rect id="I" x="890.21" y="0.07" width="100" height="400" />
        <g id="O">
          <path d="M627,399.93c-108.14-2.63-195-91.09-195-199.86C540.14,202.7,627,291.16,627,399.93Z" />
          <path d="M627,.21C627,109,540.14,197.44,432,200.07,432,91.3,518.89,2.84,627,.21Z" />
          <path d="M627,.21c108.14,2.63,195,91.09,195,199.86C713.92,197.44,627.07,109,627,.21Z" />
          <path d="M627,399.93c0-108.77,86.89-197.23,195-199.86C822,308.84,735.17,397.3,627,399.93Z" />
        </g>
        <g id="V">
          <polygon points="200 400 100 400 0 0 100 0 200 400" />
          <polygon points="200 400.07 300 400.07 400 0.07 300 0.07 200 400.07" />
        </g>
      </g>
    </svg>
  )
}
