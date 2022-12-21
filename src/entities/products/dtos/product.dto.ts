import { ImageDTO } from './image.dto'

class ProductDTO {
  title
  price
  isNew
  isSecondHand
  image

  constructor(model) {
    this.title = model.title
    this.price = model.price
    this.isNew = model.is_new
    this.isSecondHand = model.is_second_hand

    this.image = model.image ? new ImageDTO(model.image) : null

    return { ...this }
  }
}

export { ProductDTO }
