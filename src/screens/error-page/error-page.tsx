import { FC } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { Meta } from '@/seo/meta'
import { Button, ButtonVariants, ButtonSizes } from '@/ui/button'

import styles from './error-page.module.scss'

interface ErrorPageProps {
  code: string
  title: string
}

const ErrorPage: FC<ErrorPageProps> = ({ code, title }) => {
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
            variant={ButtonVariants.primary}
            size={ButtonSizes.lg}
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
