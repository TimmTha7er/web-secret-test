import { RangeField } from '@/entities/filter/ui/range-field'
import { useAppSelector } from '@/store/hooks'

import styles from './range.module.scss'

const Range = () => {
  const { min, max, title } = useAppSelector(
    (state) => state.products.data.filters.range
  )

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

export { Range }
