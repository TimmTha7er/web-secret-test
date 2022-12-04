import styles from './products-placeholder.module.scss'

const ProductsPlaceholder = () => {
  return (
    <div className={styles.placeholder}>
      Ничего не найдено. Попробуйте изменить условия поиска.
    </div>
  )
}

export { ProductsPlaceholder }
