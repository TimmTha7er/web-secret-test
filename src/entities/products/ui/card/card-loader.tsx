import { FC, HTMLAttributes } from 'react'

import { Loader } from '@/ui/loader'

import styles from './card.module.scss'

type CardLoaderProps = HTMLAttributes<HTMLDivElement>

const CardLoader: FC<CardLoaderProps> = ({ ...props }) => {
  return (
    <div
      className={styles.card}
      {...props}
    >
      <div className={styles.wrap}>
        <Loader
          width="400"
          height="400"
          className={styles.image}
          uniqueKey="image"
        />
      </div>
      <div className={styles.description}>
        <div className={styles.title}>
          <Loader
            width="100%"
            height="32"
            uniqueKey="description"
          />
        </div>
        <div className={styles.row}>
          <div className={styles.price}>
            <Loader
              width="100%"
              height="25"
              uniqueKey="price"
            />
          </div>
        </div>
        <div className={styles.row}>
          <Loader
            width="100%"
            height="32"
            uniqueKey="row"
          />
        </div>
      </div>
    </div>
  )
}

export { CardLoader }
