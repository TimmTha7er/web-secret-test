import { FC } from 'react'

import ErrorIcon from '@/icons/error.svg'

import styles from './error-indicator.module.scss'

const ErrorIndicator: FC = () => {
  return (
    <div className={styles.indicator}>
      <ErrorIcon className={styles.icon} />
      <div>Вай вай!</div>
      <div>Что-то пошло не так</div>
    </div>
  )
}

export { ErrorIndicator }
