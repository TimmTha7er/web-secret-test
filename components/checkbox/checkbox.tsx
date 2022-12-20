import { useState } from 'react'

import styles from './checkbox.module.scss'

const CheckBox = ({
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
        {...props}
      />
      <span className={styles.box}></span>
      {label}
    </label>
  )
}

export { CheckBox }
