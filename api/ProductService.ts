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
        filters: data.filters,
        products: data.products,
      }
    } catch (error) {
      throw new Error('Could not fetch selected brand data')
    }
  }
}

export { ProductService }
