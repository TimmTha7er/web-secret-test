import { memo } from 'react'

import { RangeField } from '@/entities/filter/ui/range-field'

import styles from './range.module.scss'

const Range = ({ data: { min, max, title } }) => {
  return (
    <div
      className={styles.range}
      role="range"
      aria-label="Фильтр по цене"
    >
      <h3 className={styles.title}>{title}, ₽</h3>

      <div className={styles.fields}>
        <RangeField
          defaultValue={min}
          queryName={'price[min]'}
          title="Задать минимальную стоимость"
        />
        <RangeField
          defaultValue={max}
          queryName={'price[max]'}
          title="Задать максимальная стоимость"
        />
      </div>
    </div>
  )
}

const MemoizedRange = memo(Range)

export { MemoizedRange }
