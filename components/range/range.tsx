import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import { useDebounce } from '@/hooks/useDebounce'

import styles from './range.module.scss'

const Range = ({ data }) => {
  const { min: defaultMin, max: defaultMax, title } = data

  const router = useRouter()
  const [min, setMin] = useState(defaultMin.replace('.00', ''))
  const [max, setMax] = useState(defaultMax.replace('.00', ''))

  useEffect(() => {
    if (router.query['price[min]']) {
      setMin(router.query['price[min]'])
    }

    if (router.query['price[max]']) {
      setMax(router.query['price[max]'])
    }
  }, [])

  const debouncedMin = useDebounce((min) => {
    router.replace({
      query: { ...router.query, 'price[min]': min },
    })
  }, 500)

  const debouncedMax = useDebounce((max) => {
    router.replace({
      query: { ...router.query, 'price[max]': max },
    })
  }, 500)

  const handleMinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value

    setMin(value)
    debouncedMin(value)
  }

  const handleMaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value

    setMax(value)
    debouncedMax(value)
  }

  return (
    <div className={styles.range}>
      <h3 className={styles.title}>{title}, ₽</h3>

      <div className={styles.fields}>
        <input
          className={styles.from}
          type="number"
          value={min}
          onChange={handleMinChange}
          pattern="[0-9.]+"
        />
        <input
          className={styles.to}
          type="number"
          value={max}
          onChange={handleMaxChange}
          pattern="[0-9.]+"
        />
      </div>
    </div>
  )
}

export { Range }
