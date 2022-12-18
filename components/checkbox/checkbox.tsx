import { useState } from 'react'

import styles from './checkbox.module.scss'

const CheckBox = ({
  title,
  defaultState,
  handleClick,
  disabled = false,
  className = '',
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
    >
      <input
        className={`${styles.input} visually-hidden`}
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        {...props}
      />
      <span className={styles.box}></span>
      {title}
    </label>
  )
}

export { CheckBox }
