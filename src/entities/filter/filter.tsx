import { FC, HTMLAttributes } from 'react'

import { Range } from '@/entities/filter/ui/range'
import { Brands } from '@/entities/filter/ui/brands'
import { ErrorBoundary } from '@/supports/error-boundary/error-boundary'

import { useAppSelector } from '@/store/hooks'

import styles from './filter.module.scss'

interface FilterProps extends HTMLAttributes<HTMLDivElement> {
  className: string
}

const Filter: FC<FilterProps> = ({ className, ...props }) => {
  const count = useAppSelector((state) => state.products.data.products.length)

  return (
    <div
      className={`${styles.filter} ${className}`}
      {...props}
    >
      <div className={styles.header}>
        <h1 className={styles.title}>Камеры</h1>
        <div className={`${styles.count} text-muted`}>Товаров {count}</div>
      </div>

      <ErrorBoundary>
        <Range aria-label="Фильтр по цене" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Brands aria-label="Фильтр по бренду" />
      </ErrorBoundary>
    </div>
  )
}

export { Filter }
