import { useRouter } from 'next/router'
import { CheckBox } from '@/components/checkbox'
import { useQueryToArray } from '@/hooks/useQueryToArray'

import styles from './brands.module.scss'

const Brands = ({ data }) => {
  const router = useRouter()
  useQueryToArray('brands[]')

  const { title, items } = data

  const handleBrandClick = (value) => (checked) => {
    const brandQuery = router.query['brands[]']

    const result = checked
      ? brandQuery.filter((element) => element !== value)
      : [...brandQuery, value]

    router.push({
      query: {
        ...router.query,
        'brands[]': result,
      },
    })
  }

  return (
    <div className={styles.brands}>
      <h3 className={styles.title}>{title}</h3>

      {items.map(({ title, value }) => {
        return (
          <CheckBox
            key={value}
            title={title}
            value={value}
            handleClick={handleBrandClick(value)}
          />
        )
      })}
    </div>
  )
}

export { Brands }
