import { FC, InputHTMLAttributes, useState } from 'react'

import { useDebounce } from '@/hooks/useDebounce'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputValidate: (value: string) => string
  handleChange: (value: string) => void
  debounceTimeout: number
  defaultValue: string
}

const Input: FC<InputProps> = ({
  className,
  defaultValue,
  inputValidate,
  handleChange,
  debounceTimeout,
  ...props
}) => {
  const [value, setValue] = useState<string>(defaultValue)

  const debouncedHandleChange = useDebounce(handleChange, debounceTimeout)

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    const validValue = inputValidate(value)

    setValue(validValue)

    if (debounceTimeout) {
      debouncedHandleChange(validValue)

      return
    }

    handleChange(validValue)
  }

  return (
    <input
      className={className}
      value={value}
      onChange={onChange}
      {...props}
    />
  )
}

export { Input }
