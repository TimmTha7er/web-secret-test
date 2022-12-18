import styles from './button.module.scss'

const Button = ({ size, variant, children, className = '', ...props }) => {
  return (
    <button
      {...props}
      className={`${styles.button} 
                  ${styles[size] || ''} 
                  ${styles[variant] || ''} 
                  ${className}`}
    >
      {children}
    </button>
  )
}

export { Button }
