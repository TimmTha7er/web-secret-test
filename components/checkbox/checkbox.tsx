import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import styles from './checkbox.module.scss'

const CheckBox = ({ title, value }) => {
  const [checked, setChecked] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (router.query['brands[]'] === value) {
      setChecked(true)
    }
  }, [router.asPath])

  const handleChange = () => {
    setChecked((prev) => !prev)

    if (checked) {
      delete router.query['brands[]']
      router.push(router)

      return
    }

    router.replace({
      query: { ...router.query, 'brands[]': value },
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
