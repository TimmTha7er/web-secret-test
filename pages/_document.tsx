import { FC } from 'react'
import { Head, Html, Main, NextScript } from 'next/document'

const Document: FC = () => {
  return (
    <Html lang="ru">
      <Head>
        <link
          rel="icon"
          href="/images/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          href="/images/favicons/favicon-16x16.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
