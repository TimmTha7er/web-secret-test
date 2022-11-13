import Image from 'next/image'

import { Label } from '@/components/label'
import LikeImage from '@/icons/like.svg'

import styles from './card.module.scss'

const Card = ({ product }) => {
  const { title, price, is_new, is_second_hand, image } = product

  return (
    <div className={styles.card}>
      {is_new && <Label type={'success'}>Новинка</Label>}

      <div className={styles.imageWrap}>
        <Image
          className={styles.image}
          src={image.desktop.webp_x2}
          alt="Изображение фотоаппарата"
          fill
        />
      </div>
      <div className={styles.description}>
        <div className={styles.title}>{title}</div>
        <div className={styles.row}>
          <div className={styles.price}>{price} ₽</div>
          {!is_second_hand && <div className={styles.state}>Новый</div>}
        </div>
        <div className={styles.row}>
          <button className={styles.add}>В корзину</button>
          <button className={styles.like}>
            <LikeImage />
          </button>
        </div>
      </div>
    </div>
  )
}

export { Card }
