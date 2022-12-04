import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useQueryToArray } from '@/hooks/useQueryToArray'

import styles from './checkbox.module.scss'

const CheckBox = ({ title, value, handleClick }) => {
  const [checked, setChecked] = useState(false)
  const router = useRouter()
  useQueryToArray('brands[]')

  useEffect(() => {
    const brandQuery = router.query['brands[]']

    brandQuery.forEach((element) => {
      if (element === value) {
        setChecked(true)
      }
    })

    return
  }, [])

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
