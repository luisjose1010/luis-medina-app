interface ProjectLink {
  type: 'app' | 'api' | 'fullstack' | 'presentation' | 'other'
  label: string
  url: string
  isSolidButton?: boolean
}

interface Project {
  name: string
  description: string
  note?: string
  links: ProjectLink[]
  imagesCount: number
  slug: string
  tags: string[]
}

interface NavLink {
  name: string
  url: string
  target?: string
  Icon: ({ ...props }: Record<string, any>) => JSX.Element
}
