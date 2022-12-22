import { useEffect, useState } from 'react'

import { CheckBox } from '@/ui/checkbox'
import { useCustomRouter } from '@/hooks/useCustomRouter'
import { useLoader } from '@/hooks/useLoader'

import { useAppSelector } from '@/store/hooks'

import styles from './brands.module.scss'

const Brands = () => {
  const loading = useLoader()
  const router = useCustomRouter()
  const brandQuery = router.getQueryArray('brands[]')

  const [selectedBrands, setSelectedBrands] = useState<string[]>(brandQuery)
  const { title, items } = useAppSelector(
    (state) => state.products.data.filters.brands
  )

  useEffect(() => {
    const brandQuery = router.getQueryArray('brands[]')

    setSelectedBrands(brandQuery)
  }, [router.asPath])

  const handleBrandClick = (value) => (checked) => {
    const brandQuery = router.getQueryArray('brands[]')

    const result = checked
      ? brandQuery.filter((element) => element !== value)
      : [...brandQuery, value]

    router.replaceQuery('brands[]', result)
  }

  return (
    <div
      className={styles.brands}
      aria-label="Фильтр по бренду"
    >
      <h3 className={styles.title}>{title}</h3>

      {items.map(({ title, value }) => {
        const defaultState = selectedBrands.includes(value)

        return (
          <CheckBox
            key={title + value}
            label={title}
            defaultState={defaultState}
            handleClick={handleBrandClick(value)}
            disabled={loading}
            title={`Показать объективы бренда ${title}`}
          />
        )
      })}
    </div>
  )
}

export { Brands }
