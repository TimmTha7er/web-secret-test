import { useState } from 'react'

import styles from './checkbox.module.scss'

const CheckBox = ({ title, defaultState, handleClick }) => {
  const [checked, setChecked] = useState<boolean>(defaultState)

  const handleChange = () => {
    setChecked((prev) => {
      handleClick(prev)

      return !prev
    })
  }

  return (
    <label className={`${styles.check} ${styles.option}`}>
      <input
        className={`${styles.input} visually-hidden`}
        type="checkbox"
        checked={checked}
        onChange={handleChange}
      />
      <span className={styles.box}></span>
      {title}
    </label>
  )
}

export { CheckBox }
