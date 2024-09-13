type Project = {
  name: string
  description: string
  notes?: string
  source?: string | { app: string, api: string }
  live?: string | { app: string, api: string }
  imagesCount: number
  slug: string
  tags: Array<string>
}

type NavLink = {
  name: string;
  url: string;
  icon: ({ ...props }: {
    [x: string]: any;
  }) => JSX.Element;
}
