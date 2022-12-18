import React, { useState, useEffect, useCallback } from 'react'

import { Input } from '@/components/input'
import { useCustomRouter } from '@/hooks/useCustomRouter'
import { getOnlyNumbers } from '@/utils/getOnlyNumbers'

import styles from './range-field.module.scss'

const RangeField = ({ defaultValue, queryName }) => {
  const router = useCustomRouter()
  const [value, setValue] = useState<string>(defaultValue)

  useEffect(() => {
    const value = router.query[queryName] as string

    if (value) {
      setValue(value)
    }
  }, [])

  const setQuery = useCallback((value: string) => {
    if (value === '') {
      router.removeQuery(queryName)

      return
    }

    router.replaceQuery(queryName, value)
  }, [])

  return (
    <Input
      className={styles.field}
      defaultValue={value}
      inputValidate={getOnlyNumbers}
      handleChange={setQuery}
      debounceTimeout={500}
      type="text"
    />
  )
}

export { RangeField }
