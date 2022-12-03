import Head from 'next/head'

const PageHead = () => {
  return (
    <Head>
      <title>Фильтр</title>
      <meta
        name="description"
        content="Тестовое задание от web secret"
      />
      <link
        rel="icon"
        href="/images/favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        href="/images/favicons/favicon-16x16.png"
      />
    </Head>
  )
}

export { PageHead as Head }
