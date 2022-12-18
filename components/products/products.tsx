import { memo } from 'react'

import { Card } from '@/components/card'
import { ProductsPlaceholder } from '@/components/products-placeholder'
import { CardLoader } from '../card/card-loader'

import { useLoader } from '@/hooks/useLoader'

import styles from './products.module.scss'

const Products = ({ data }) => {
  const loading = useLoader()

  if (data.length === 0) {
    return <ProductsPlaceholder />
  }

  return (
    <div className={styles.products}>
      {data.map((product, idx) => {
        if (loading) {
          return <CardLoader key={idx} />
        }

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

const MemoizedProducts = memo(Products)

export { MemoizedProducts }
