import { Brand, Lenses } from '@/types/global'

class BrandsDTO {
  title: Brand['title']
  items: Brand['value'][]

  constructor(model: Lenses['filters'][3]) {
    this.title = model.title
    this.items = model.items.map(({ title, value }: Brand['value']) => ({
      title,
      value,
    }))

    return { ...this }
  }
}

export { BrandsDTO }
