import Head from 'next/head'
import { Filter } from '@/components/filter'
import { Products } from '@/components/products'
import { Meta } from '@/components/meta'
import { ProductService } from '@/api/ProductService'

const Page = ({ data }) => {
  return (
    <>
      <Meta
        title={'Фильтр'}
        description="Тестовое задание от web secret"
      />

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

export async function getServerSideProps({ resolvedUrl }) {
  const data = await ProductService.getProducts(resolvedUrl)

  return {
    props: { data },
  }
}

export default Page
