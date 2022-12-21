import { BrandsDTO } from '@/entities/filter/dtos/brands.dto'
import { RangeDTO } from '@/entities/filter/dtos/range.dto'
import { ProductDTO } from '@/entities/products/dtos/product.dto'

class ProductService {
  static async getProducts(url: string) {
    try {
      const response = await fetch(process.env.BASE_URL + url)

      if (!response.ok) {
        throw new Error(
          `Could not fetch ${process.env.BASE_URL + url}, received ${
            response.status
          }`
        )
      }

      const data = await response.json()

      return {
        filters: this.transformFilters(data.filters),
        products: this.transformProducts(data.products),
      }
    } catch (error) {
      throw new Error('Could not fetch selected brand data')
    }
  }

  private static transformProducts(products) {
    return products.map((product) => {
      const newProducts = new ProductDTO(product)

      return newProducts
    })
  }

  private static transformFilters(filters) {
    const range = new RangeDTO(filters[0])
    const brands = new BrandsDTO(filters[3])

    return {
      range,
      brands,
    }
  }
}

export { ProductService }
