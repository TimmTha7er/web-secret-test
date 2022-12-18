import { Filter } from '@/components/filter'
import { Products } from '@/components/products'
import { Meta } from '@/components/meta'

import styles from './lenses.module.scss'

const Lenses = ({ data }) => {
  return (
    <>
      <Meta
        title={'Фильтр'}
        description="Тестовое задание от web secret"
      />

      <div className="container">
        <div className={styles.lenses}>
          <Filter
            data={data.filters}
            className={styles.filter}
          />
          <Products data={data.products} />
        </div>
      </div>
    </>
  )
}

export { Lenses }
