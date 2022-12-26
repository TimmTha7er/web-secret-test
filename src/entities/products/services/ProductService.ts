import { BrandsDTO } from '@/entities/filter/dtos/brands.dto'
import { RangeDTO } from '@/entities/filter/dtos/range.dto'
import { ProductDTO } from '@/entities/products/dtos/product.dto'

import { Data } from '@/types/global'
import { Brands } from '@/entities/filter/ui/brands/brands.interface'
import { Range } from '@/entities/filter/ui/range/range.interface'
import {
  Product,
  ProductResponse,
} from '@/entities/products/ui/card/product.interface'

interface HttpResponse<T> extends Response {
  parsedBody?: T
}

class ProductService {
  private static async getResource<T>(url: string): Promise<HttpResponse<T>> {
    const response: HttpResponse<T> = await fetch(process.env.BASE_URL + url)

    try {
      response.parsedBody = await response.json()
    } catch (error) {
      throw new Error('There is no body')
    }

    if (!response.ok) {
      throw new Error(`Could not fetch ${url}, received ${response.status}`)
    }

    return response
  }

  static async getProducts(url: string) {
    try {
      const response = await this.getResource<Data>(url)
      const data = response.parsedBody

      if (!data?.filters || !data?.products) {
        throw new Error('Could not fetch data')
      }

      return {
        filters: this.transformFilters(data.filters),
        products: this.transformProducts(data.products),
      }
    } catch (error) {
      throw new Error('Could not fetch data')
    }
  }

  private static transformProducts(products: ProductResponse[]) {
    return products.map((product) => {
      const newProducts: Product = new ProductDTO(product)

      return newProducts
    })
  }

  private static transformFilters(filters: Data['filters']) {
    const range: Range = new RangeDTO(filters[0])
    const brands: Brands = new BrandsDTO(filters[3])

    return {
      range,
      brands,
    }
  }
}

export { ProductService }
