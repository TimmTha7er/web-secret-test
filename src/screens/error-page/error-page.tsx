import Link from 'next/link'
import { useRouter } from 'next/router'

import { Meta } from '@/seo/meta'
import { Button } from '@/ui/button'

import styles from './error-page.module.scss'

const ErrorPage = ({ code, title }) => {
  const router = useRouter()

  const handleButtonClick = () => {
    router.reload()
  }

  return (
    <>
      <Meta title={title} />

      <div className={styles.error}>
        <div className={styles.container}>
          <div className={styles.code}>{code}</div>
          <div className={styles.title}>{title}</div>
          <div className={styles.text}>
            <span>Попробуйте перезагрузить страницу или </span>
            <Link href={'/'}>вернитесь на главную</Link>.
          </div>
          <Button
            variant={'primary'}
            size="lg"
            onClick={handleButtonClick}
          >
            Перезагрузить
          </Button>
        </div>
      </div>
    </>
  )
}

export { ErrorPage }
