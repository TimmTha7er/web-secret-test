import { useMemo } from 'react'

import { Range } from '@/entities/filter/ui/range'
import { Brands } from '@/entities/filter/ui/brands'
import { ErrorBoundary } from '@/supports/error-boundary/error-boundary'

import styles from './filter.module.scss'

const Filter = ({ data, className }) => {
  const range = useMemo(() => data[0], [])
  const brands = useMemo(() => data[3], [])
  const count = data[3].items.length

  return (
    <div className={`${styles.filter} ${className}`}>
      <div className={styles.header}>
        <h1 className={styles.title}>Камеры</h1>
        <div className={`${styles.count} text-muted`}>Товаров {count}</div>
      </div>

      <ErrorBoundary>
        <Range data={range} />
      </ErrorBoundary>
      <ErrorBoundary>
        <Brands data={brands} />
      </ErrorBoundary>
    </div>
  )
}

export { Filter }
