import { Card } from '@/components/card'

import styles from './products.module.scss'

const Products = ({ data = [] }) => {
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
