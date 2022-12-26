import { Data } from '@/types/global'
import { Brand } from '@/entities/filter/ui/brands/brands.interface'

class BrandsDTO {
  title: Brand['title']
  items: Brand['value'][]

  constructor(model: Data['filters'][3]) {
    this.title = model.title
    this.items = model.items.map(({ title, value }: Brand['value']) => ({
      title,
      value,
    }))

    return { ...this }
  }
}

export { BrandsDTO }
