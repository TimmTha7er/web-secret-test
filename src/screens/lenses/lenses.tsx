import { Filter } from '@/entities/filter'
import { Products } from '@/entities/products'
import { Meta } from '@/seo/meta'
import { ErrorBoundary } from '@/supports/error-boundary/error-boundary'

import styles from './lenses.module.scss'

const Lenses = ({ data: { filters, products } }) => {
  console.log('products', products)
  return (
    <>
      <Meta
        title={'Фильтр'}
        description="Тестовое задание от web secret"
      />

      <div className="container">
        <div className={styles.lenses}>
          <Filter
            data={filters}
            count={products.length}
            className={styles.filter}
          />
          <ErrorBoundary>
            <Products data={products} />
          </ErrorBoundary>
        </div>
      </div>
    </>
  )
}

export { Lenses }
