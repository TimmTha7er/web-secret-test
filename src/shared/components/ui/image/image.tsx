import React, { FC, ImgHTMLAttributes } from 'react'

import { Breakpoints, Image } from '@/types/global'

import styles from './image.module.scss'

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  image: Image | null
  placeholderImg: string
}

const Image: FC<ImageProps> = ({ image, placeholderImg, ...restProps }) => {
  return (
    <>
      {image && (
        <picture>
          <source
            type="image/webp"
            media={`(min-width: ${Breakpoints.lg}px)`}
            srcSet={`${image.desktop.webpX1}, ${image.desktop.webpX2} 2x`}
          />
          <source
            media={`(min-width: ${Breakpoints.lg}px)`}
            srcSet={`${image.desktop.x1}, ${image.desktop.x2} 2x`}
          />
          <source
            type="image/webp"
            media={`(min-width: ${Breakpoints.md}px)`}
            srcSet={`${image.tablet.webpX1}, ${image.tablet.webpX2} 2x`}
          />
          <source
            media={`(min-width: ${Breakpoints.md}px)`}
            srcSet={`${image.tablet.x1}, ${image.tablet.x2} 2x`}
          />
          <source
            type="image/webp"
            media={`(max-width: ${Breakpoints.sm}px)`}
            srcSet={`${image.mobile.webpX1}, ${image.mobile.webpX2} 2x`}
          />
          <source
            media={`(max-width: ${Breakpoints.sm}px)`}
            srcSet={`${image.mobile.x1}, ${image.mobile.x2} 2x`}
          />
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <img
            src={image.desktop.x1}
            srcSet={`${image.desktop.x2} 2x`}
            {...restProps}
            loading="lazy"
          />
        </picture>
      )}
      <img
        className={styles.placeholder}
        src={placeholderImg}
        alt="placeholder"
      />
    </>
  )
}

export { Image }
