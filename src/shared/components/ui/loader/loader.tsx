// https://skeletonreact.com
import { FC } from 'react'
import ContentLoader, { IContentLoaderProps } from 'react-content-loader'

const Loader: FC<IContentLoaderProps> = ({ width, height, ...props }) => (
  <ContentLoader
    speed={2}
    width={width}
    height={height}
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect
      x="0"
      y="0"
      rx="0"
      ry="0"
      width={width}
      height={height}
    />
  </ContentLoader>
)

export { Loader }
