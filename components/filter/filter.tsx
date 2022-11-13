import { Range } from '@/components/range'
import { Brands } from '@/components/brands'

import styles from './filter.module.scss'

const Filter = ({ data }) => {
  const range = data[0]
  const brands = data[3]
  const count = data[3].items.length

  return (
    <div className={`${styles.filter} page__filter`}>
      <div className={styles.header}>
        <h1 className={styles.title}>Камеры</h1>
        <div className={`${styles.count} text-muted`}>Товаров {count}</div>
      </div>

      <Range data={range} />
      <Brands data={brands} />
    </div>
  )
}

export { Filter }
