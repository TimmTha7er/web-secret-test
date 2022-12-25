import { FC, HTMLAttributes } from 'react'

import styles from './products-placeholder.module.scss'

interface ProductsPlaceholderProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
}

const ProductsPlaceholder: FC<ProductsPlaceholderProps> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={`${styles.placeholder} ${className}`}
      {...props}
    >
      Ничего не найдено. Попробуйте изменить условия поиска.
    </div>
  )
}

export { ProductsPlaceholder }
