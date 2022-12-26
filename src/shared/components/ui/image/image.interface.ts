interface ImageSize {
  x1: string
  x2: string
  webpX1: string
  webpX2: string
}

interface ImageSizeResponse {
  x1: string
  x2: string
  webp_x1: string
  webp_x2: string
}

type TabletImage = ImageSize
type MobileImage = ImageSize

type TabletImageResponse = ImageSizeResponse
type MobileImageResponse = ImageSizeResponse

interface Image {
  desktop: ImageSize
  tablet: TabletImage
  mobile: MobileImage
}

interface ImageResponse {
  desktop: ImageSizeResponse
  tablet: TabletImageResponse
  mobile: MobileImageResponse
}

export type { Image, ImageResponse }
