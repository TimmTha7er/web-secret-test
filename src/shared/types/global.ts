enum Breakpoints {
  xs = 0,
  sm = 480,
  md = 768,
  lg = 1024,
  xl = 1280,
  xxl = 1440,
}

interface DesktopImage {
  x1: string
  x2: string
  webpX1: string
  webpX2: string
}

type TabletImage = DesktopImage
type MobileImage = DesktopImage

interface Image {
  desktop: DesktopImage
  tablet: TabletImage
  mobile: MobileImage
}

interface Product {
  title: string
  price: string
  isNew: boolean
  isSecondHand: boolean
  image: Image | null
}

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

interface Range {
  min: string
  max: string
  title: string
}

interface Lenses {
  filters: [Range, unknown, unknown, Brands]
  products: Product[]
}

export { Breakpoints }
export type { Image, Product, Brand, Brands, Range, Lenses }
