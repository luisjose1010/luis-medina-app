interface Project {
  name: string
  description: string
  note?: string
  source?: string | { app: string, api: string }
  live?: string | { app: string, api: string }
  imagesCount: number
  slug: string
  tags: string[]
}

interface NavLink {
  name: string
  url: string
  Icon: ({ ...props }: Record<string, any>) => JSX.Element
}
