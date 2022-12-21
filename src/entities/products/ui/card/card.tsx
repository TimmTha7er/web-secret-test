import { Label } from '@/ui/label'
import { Image } from '@/ui/image'
import { Button } from '@/ui/button'

import LikeImage from '@/icons/like.svg'
import CameraImage from '@/icons/camera.svg?url'

import styles from './card.module.scss'

const Card = ({ product }) => {
  const { title, price, isNew, isSecondHand, image } = product

  return (
    <div className={styles.card}>
      {isNew && (
        <Label
          variant={'success'}
          size={'sm'}
        >
          Новинка
        </Label>
      )}

      <div className={styles.wrap}>
        <Image
          image={image}
          className={styles.image}
          placeholderImg={CameraImage}
          alt={`фотообъектив ${title}`}
        />
      </div>
      <div className={styles.description}>
        <div
          className={styles.title}
          aria-label="Название объектива"
        >
          {title}
        </div>
        <div className={styles.row}>
          <div
            className={styles.price}
            aria-label="Цена объектива"
          >
            {price} ₽
          </div>
          {!isSecondHand && <div className={styles.state}>Новый</div>}
        </div>
        <div className={styles.row}>
          <Button
            variant={'outline-float'}
            aria-label="Добавить в корзину"
          >
            В корзину
          </Button>
          <Button
            size="icon"
            variant={'icon'}
            className={styles.like}
            title="Добавить в список желаний"
          >
            <LikeImage aria-hidden="true" />
          </Button>
        </div>
      </div>
    </div>
  )
}

export { Card }
