import { Breakpoints } from 'types/global'

const Image = ({ image, ...restProps }) => {
  return (
    <picture>
      <source
        type="image/webp"
        media={`(min-width: ${Breakpoints.lg}px)`}
        srcSet={`${image.desktop.webp_x1}, ${image.desktop.webp_x2} 2x`}
      />
      <source
        media={`(min-width: ${Breakpoints.lg}px)`}
        srcSet={`${image.desktop.x1}, ${image.desktop.x2} 2x`}
      />
      <source
        type="image/webp"
        media={`(min-width: ${Breakpoints.md}px)`}
        srcSet={`${image.tablet.webp_x1}, ${image.tablet.webp_x2} 2x`}
      />
      <source
        media={`(min-width: ${Breakpoints.md}px)`}
        srcSet={`${image.tablet.x1}, ${image.tablet.x2} 2x`}
      />
      <source
        type="image/webp"
        media={`(max-width: ${Breakpoints.sm}px)`}
        srcSet={`${image.mobile.webp_x1}, ${image.mobile.webp_x2} 2x`}
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
      />
    </picture>
  )
}

export { Image }
