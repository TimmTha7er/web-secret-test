import { memo, useEffect, useState } from 'react'

import { CheckBox } from '@/components/checkbox'
import { useCustomRouter } from '@/hooks/useCustomRouter'
import { useLoader } from '@/hooks/useLoader'

import styles from './brands.module.scss'

const Brands = ({ data }) => {
  const loading = useLoader()
  const router = useCustomRouter()
  const brandQuery = router.getQueryArray('brands[]')

  const { title, items } = data
  const [selectedBrands, setSelectedBrands] = useState<string[]>(brandQuery)

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
    <div className={styles.brands}>
      <h3 className={styles.title}>{title}</h3>

      {items.map(({ title, value }) => {
        const defaultState = selectedBrands.includes(value)

        return (
          <CheckBox
            key={title + value}
            title={title}
            defaultState={defaultState}
            handleClick={handleBrandClick(value)}
            disabled={loading}
          />
        )
      })}
    </div>
  )
}

const MemoizedBrands = memo(Brands)

export { MemoizedBrands }
