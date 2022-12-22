import { Range } from '@/entities/filter/ui/range'
import { Brands } from '@/entities/filter/ui/brands'
import { ErrorBoundary } from '@/supports/error-boundary/error-boundary'

import { useAppSelector } from '@/store/hooks'

import styles from './filter.module.scss'

const Filter = ({ className }) => {
  const count = useAppSelector((state) => state.products.data.products.length)

  return (
    <div className={`${styles.filter} ${className}`}>
      <div className={styles.header}>
        <h1 className={styles.title}>Камеры</h1>
        <div className={`${styles.count} text-muted`}>Товаров {count}</div>
      </div>

      <ErrorBoundary>
        <Range />
      </ErrorBoundary>
      <ErrorBoundary>
        <Brands />
      </ErrorBoundary>
    </div>
  )
}

export { Filter }
