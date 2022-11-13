import styles from './label.module.scss'

const Label = ({ type, children }) => {
  return <div className={`${styles.label} ${styles[type]}`}>{children}</div>
}

export { Label }
