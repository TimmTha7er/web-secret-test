import { memo } from 'react'

import { RangeField } from '@/components/range-field'

import styles from './range.module.scss'

const Range = ({ data }) => {
  const { min, max, title } = data

  const defaultMin = min.replace('.00', '')
  const defaultMax = max.replace('.00', '')

  return (
    <div
      className={styles.range}
      role="range"
      aria-label="Фильтр по цене"
    >
      <h3 className={styles.title}>{title}, ₽</h3>

      <div className={styles.fields}>
        <RangeField
          defaultValue={defaultMin}
          queryName={'price[min]'}
          title="Задать минимальную стоимость"
        />
        <RangeField
          defaultValue={defaultMax}
          queryName={'price[max]'}
          title="Задать максимальная стоимость"
        />
      </div>
    </div>
  )
}

const MemoizedRange = memo(Range)

export { MemoizedRange }
