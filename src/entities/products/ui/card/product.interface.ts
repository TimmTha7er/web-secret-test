import { Image, ImageResponse } from '@/ui/image/image.interface'

interface Product {
  id: number
  title: string
  price: string
  isNew: boolean
  isSecondHand: boolean
  image: Image | null
}

interface ProductResponse {
  id: number
  title: string
  price: string
  is_new: boolean
  is_second_hand: boolean
  image: ImageResponse | null
}

export type { Product, ProductResponse }
