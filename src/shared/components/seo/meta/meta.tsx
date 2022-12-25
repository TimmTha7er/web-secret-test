import { FC, ReactNode } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

const logoImage = require('@/images/icons/logo.svg?url') as string

export interface Seo {
  title: string
  description?: string
  image?: string
  children?: ReactNode
}

const Meta: FC<Seo> = ({ title, description, image, children }) => {
  const { asPath } = useRouter()
  const currentUrl = `${process.env.BASE_URL}${asPath}`

  return (
    <>
      <Head>
        <title itemProp="headline">{title}</title>
        {description ? (
          <>
            <meta
              itemProp="description"
              name="description"
              content={description || process.env.DESCRIPTION}
            />
            <link
              rel="canonical"
              href={currentUrl}
            />
            <meta
              property="og:local"
              content="ru"
            />
            <meta
              property="og:title"
              content={title}
            />
            <meta
              property="og:url"
              content={currentUrl}
            />
            <meta
              property="og:image"
              content={image || logoImage}
            />
            <meta
              property="og:site_name"
              content={process.env.SITE_NAME}
            />
            <meta
              property="og:description"
              content={description || process.env.DESCRIPTION}
            />
          </>
        ) : (
          <meta
            name="robots"
            content="noindex, nofollow"
          />
        )}
      </Head>

      {children}
    </>
  )
}

export { Meta }
