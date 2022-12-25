import React, { FC, InputHTMLAttributes } from 'react'

import { Input } from '@/ui/input'
import { useCustomRouter } from '@/hooks/useCustomRouter'
import { getOnlyNumbers } from '@/utils/getOnlyNumbers'

import styles from './range-field.module.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  defaultValue: string
  queryName: string
}

const RangeField: FC<InputProps> = ({ defaultValue, queryName, ...props }) => {
  const router = useCustomRouter()
  const value = (router.query[queryName] as string) || defaultValue

  const setQuery = (value: string) => {
    if (value === '') {
      router.removeQuery(queryName)

      return
    }

    router.replaceQuery(queryName, value)
  }

  return (
    <Input
      className={styles.field}
      defaultValue={value}
      inputValidate={getOnlyNumbers}
      handleChange={setQuery}
      debounceTimeout={500}
      type="text"
      {...props}
    />
  )
}

export { RangeField }
