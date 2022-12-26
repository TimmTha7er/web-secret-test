import { FC, HTMLAttributes } from 'react'

import { Badge, BadgeSizes, BadgeVariants } from '@/ui/badge'
import { Image } from '@/ui/image'
import { Button, ButtonVariants, ButtonOutlineVariants } from '@/ui/button'

import LikeImage from '@/icons/like.svg'

const CameraImage = require('@/icons/camera.svg?url') as string
import { Product } from '@/entities/products/ui/card/product.interface'

import styles from './card.module.scss'

interface ProductProps extends HTMLAttributes<HTMLDivElement> {
  product: Product
  className?: string
}

const Card: FC<ProductProps> = ({ product, className }) => {
  const { title, price, isNew, isSecondHand, image } = product

  return (
    <div className={`${styles.card} ${className}`}>
      {isNew && (
        <Badge
          variant={BadgeVariants.success}
          size={BadgeSizes.sm}
        >
          Новинка
        </Badge>
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
            variant={ButtonOutlineVariants.float}
            aria-label="Добавить в корзину"
          >
            В корзину
          </Button>
          <Button
            variant={ButtonVariants.icon}
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
