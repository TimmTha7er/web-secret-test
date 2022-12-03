import { Label } from '@/components/label'
import { Image } from '@/components/image'
import LikeImage from '@/icons/like.svg'

import styles from './card.module.scss'

const Card = ({ product }) => {
  const { title, price, is_new, is_second_hand, image } = product

  return (
    <div className={styles.card}>
      {is_new && <Label type={'success'}>Новинка</Label>}

      <div className={styles.wrap}>
        <Image
          image={image}
          className={styles.image}
          placeholderImg={
            'data:image/gif;base64,R0lGODlhAQABAIABAEdJRgAAACwAAAAAAQABAAACAkQBAA=='
          }
          alt={`фотообъектив ${title}`}
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
