/// <reference types="vite/client" />

declare module '*.jpg' {
  const value: string
  export default value
}

declare module '*.jpeg' {
  const value: string
  export default value
}

declare module '*.png' {
  const value: string
  export default value
}

declare module '*.gif' {
  const value: string
  export default value
}

declare module '*.svg' {
  import { FC, SVGProps } from 'react'
  export const ReactComponent: FC<SVGProps<SVGSVGElement>>
  const value: string
  export default value
}

declare module '*.webp' {
  const value: string
  export default value
}
