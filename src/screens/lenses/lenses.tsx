import { Filter } from '@/entities/filter'
import { Products } from '@/entities/products'
import { Meta } from '@/seo/meta'
import { ErrorBoundary } from '@/supports/error-boundary/error-boundary'

import styles from './lenses.module.scss'

const Lenses = () => {
  return (
    <>
      <Meta
        title={'Фильтр'}
        description="Тестовое задание от web secret"
      />

      <div className="container">
        <div className={styles.lenses}>
          <Filter className={styles.filter} />
          <ErrorBoundary>
            <Products />
          </ErrorBoundary>
        </div>
      </div>
    </>
  )
}

export { Lenses }
