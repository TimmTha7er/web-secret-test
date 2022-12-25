import { FC, HTMLAttributes } from 'react'

import { Card } from '@/entities/products/ui/card'
import { ProductsPlaceholder } from '@/entities/products/ui/products-placeholder'
import { CardLoader } from '@/entities/products/ui/card/card-loader'
import { useLoader } from '@/hooks/useLoader'

import { useAppSelector } from '@/store/hooks'

import styles from './products.module.scss'

type ProductsProps = HTMLAttributes<HTMLDivElement>

const Products: FC<ProductsProps> = ({ ...props }) => {
  const loading = useLoader()
  const products = useAppSelector((state) => state.products.data.products)

  if (products.length === 0) {
    return <ProductsPlaceholder />
  }

  return (
    <div
      className={styles.products}
      {...props}
    >
      {products.map((product, idx) => {
        if (loading) {
          return <CardLoader key={`${product.id}-${idx}`} />
        }

        return (
          <Card
            key={`${product.id}-${idx}`}
            product={product}
          />
        )
      })}
    </div>
  )
}

export { Products }
