import React, { useState } from 'react'

import { useDebounce } from '@/hooks/useDebounce'
import { getOnlyNumbers } from '@/utils/getOnlyNumbers'

const Input = ({ className, defaultValue, handleChange }) => {
  const [value, setValue] = useState<string>(defaultValue)

  const debouncedHandleChange = useDebounce(handleChange, 500)

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    const number = getOnlyNumbers(value)

    setValue(number)
    debouncedHandleChange(number)
  }

  return (
    <input
      className={className}
      type="text"
      value={value}
      onChange={onChange}
    />
  )
}

export default React.memo(Input)
