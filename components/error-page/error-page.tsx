import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from './error-page.module.scss'

const ErrorPage = ({ code, title }) => {
  const router = useRouter()

  const handleButtonClick = () => {
    router.reload()
  }

  return (
    <div className={styles.error}>
      <div className={styles.container}>
        <div className={styles.code}>404</div>
        <div className={styles.title}>Страницы не существует</div>
        <div className={styles.text}>
          <span>Попробуйте перезагрузить страницу или </span>
          <Link href={'/'}>вернитесь на главную</Link>.
        </div>
        <button
          className={styles.button}
          onClick={handleButtonClick}
        >
          Перезагрузить
        </button>
      </div>
    </div>
  )
}

export { ErrorPage }
