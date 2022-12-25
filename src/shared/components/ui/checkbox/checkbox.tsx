import { FC, InputHTMLAttributes, useState } from 'react'

import styles from './checkbox.module.scss'

interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  defaultState: boolean
  handleClick: (prev: boolean) => void
}

const CheckBox: FC<CheckBoxProps> = ({
  label,
  defaultState,
  handleClick,
  disabled = false,
  className = '',
  title,
  ...props
}) => {
  const [checked, setChecked] = useState<boolean>(defaultState)

  const handleChange = () => {
    setChecked((prev) => {
      handleClick(prev)

      return !prev
    })
  }

  return (
    <label
      className={`${styles.check} 
                  ${styles.option} 
                  ${disabled && styles.disabled} 
                  ${className}`}
      title={title}
      role="checkbox"
      aria-checked={checked}
    >
      <input
        className={`${styles.input} visually-hidden`}
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        {...props}
      />
      <span className={styles.box}></span>
      {label}
    </label>
  )
}

export { CheckBox }
