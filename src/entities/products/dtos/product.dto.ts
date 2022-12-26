import {
  Product,
  ProductResponse,
} from '@/entities/products/ui/card/product.interface'
import { ImageDTO } from './image.dto'

class ProductDTO {
  id: Product['id']
  title: Product['title']
  price: Product['price']
  isNew: Product['isNew']
  isSecondHand: Product['isSecondHand']
  image: Product['image']

  constructor(model: ProductResponse) {
    this.id = model.id
    this.title = model.title
    this.price = model.price
    this.isNew = model.is_new
    this.isSecondHand = model.is_second_hand

    this.image = model.image ? new ImageDTO(model.image) : null

    return { ...this }
  }
}

export { ProductDTO }
