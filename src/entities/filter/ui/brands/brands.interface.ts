interface Brand {
  title: string
  value: {
    title: string
    value: string
  }
}

interface Brands {
  title: Brand['title']
  items: Brand['value'][]
}

export type { Brand, Brands }
