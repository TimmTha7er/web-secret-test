import styles from './label.module.scss'

const Label = ({ variant, size, className = '', children }) => {
  return (
    <div
      className={`${styles.label} 
                  ${styles[variant] || ''} 
                  ${styles[size] || ''}
                  ${className}`}
    >
      {children}
    </div>
  )
}

export { Label }
