import { Brands } from '@/entities/filter/ui/brands/brands.interface'
import { Range } from '@/entities/filter/ui/range/range.interface'
import { ProductResponse } from '@/entities/products/ui/card/product.interface'

enum Breakpoints {
  xs = 0,
  sm = 480,
  md = 768,
  lg = 1024,
  xl = 1280,
  xxl = 1440,
}

interface Data {
  filters: [Range, unknown, unknown, Brands]
  products: ProductResponse[]
}

export { Breakpoints }
export type { Data }
