import { Card } from '@/components/card'
import { ProductsPlaceholder } from '@/components/products-placeholder'

import styles from './products.module.scss'

const Products = ({ data = [] }) => {
  if (data.length === 0) {
    return <ProductsPlaceholder />
  }

  return (
    <div className={styles.products}>
      {data.map((product) => {
        return (
          <Card
            key={product.id}
            product={product}
          />
        )
      })}
    </div>
  )
}

export { Products }
