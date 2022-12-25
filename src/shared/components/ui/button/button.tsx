import { FC, ButtonHTMLAttributes } from 'react'

import styles from './button.module.scss'

enum ButtonSizes {
  sm = 'sm',
  lg = 'lg',
}

enum ButtonVariants {
  primary = 'primary',
  secondary = 'secondary',
  icon = 'icon',
}

enum ButtonOutlineVariants {
  float = 'outline-float',
  primary = 'outline-primary',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  size?: ButtonSizes
  variant: ButtonVariants | ButtonOutlineVariants
}

const Button: FC<ButtonProps> = ({
  size,
  variant,
  children,
  className = '',
  ...props
}) => {
  return (
    <button
      {...props}
      className={`${styles.button} 
                  ${size ? styles[size] : ''} 
                  ${styles[variant]} 
                  ${className}`}
    >
      {children}
    </button>
  )
}

export { Button, ButtonSizes, ButtonVariants, ButtonOutlineVariants }
