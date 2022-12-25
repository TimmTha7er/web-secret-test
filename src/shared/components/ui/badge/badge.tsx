import { DetailedHTMLProps, FC, HTMLAttributes } from 'react'
import styles from './badge.module.scss'

enum BadgeSizes {
  sm = 'sm',
  lg = 'lg',
}

enum BadgeVariants {
  success = 'success',
  warning = 'warning',
}

interface BadgeProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string
  size?: BadgeSizes
  variant: BadgeVariants
}

const Badge: FC<BadgeProps> = ({ variant, size, className = '', children }) => {
  return (
    <div
      className={`${styles.badge} 
                  ${styles[variant]} 
                  ${size ? styles[size] : ''}
                  ${className}`}
    >
      {children}
    </div>
  )
}

export { Badge, BadgeSizes, BadgeVariants }
