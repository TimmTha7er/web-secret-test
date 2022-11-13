import { CheckBox } from '@/components/checkbox'

import styles from './brands.module.scss'

const Brands = ({ data }) => {
  const { title, items } = data

  return (
    <div className={styles.brands}>
      <h3 className={styles.title}>{title}</h3>

      {items.map(({ title, value }) => {
        return (
          <CheckBox
            key={value}
            title={title}
            value={value}
          />
        )
      })}
    </div>
  )
}

export { Brands }
