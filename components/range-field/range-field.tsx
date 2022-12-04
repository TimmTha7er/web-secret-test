import React, { useState, useEffect } from 'react'

import { useDebounce } from '@/hooks/useDebounce'
import { useRouter } from '@/hooks/useRouter'
import { getOnlyNumbers } from '@/utils/getOnlyNumbers'

import styles from './range-field.module.scss'

const RangeField = ({ defaultValue, queryName }) => {
  const router = useRouter()
  const [value, setValue] = useState<string>(defaultValue)

  useEffect(() => {
    const value = router.query[queryName] as string

    if (value) {
      setValue(value)
    }
  }, [])

  const setQuery = (value) => {
    if (value === '') {
      router.removeQuery(queryName)

      return
    }

    router.replaceQuery(queryName, value)
  }

  const debouncedSetQuery = useDebounce(setQuery, 500)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    const number = getOnlyNumbers(value)

    setValue(number)
    debouncedSetQuery(number)
  }

  return (
    <input
      className={styles.field}
      type="text"
      value={value}
      onChange={handleChange}
    />
  )
}

export { RangeField }
