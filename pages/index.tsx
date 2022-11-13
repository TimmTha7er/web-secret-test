import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import Head from 'next/head'
import { Filter } from '@/components/filter'
import { Products } from '@/components/products'
import { ProductService } from '@/api/ProductService'
import { API_URL } from '@/api/config'

const Page = () => {
  const router = useRouter()
  const [data, setData] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const data = await ProductService.getProducts(
        `${API_URL}${router.asPath}`
      )

      setData(data)
    }

    fetchData()
  }, [router.asPath])

  return (
    <>
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

      <div className="container">
        <div className="page">
          {data && (
            <>
              <Filter data={data.filters} />

              <Products data={data.products} />
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default Page
