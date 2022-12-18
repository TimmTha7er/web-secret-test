import { useMemo } from 'react'

import { Filter } from '@/components/filter'
import { Products } from '@/components/products'
import { Meta } from '@/components/meta'
import { ProductService } from '@/api/ProductService'

const Page = ({ data }) => {
  const filters = useMemo(() => data.filters, [])
  const products = useMemo(() => data.products, [])

  return (
    <>
      <Meta
        title={'Фильтр'}
        description="Тестовое задание от web secret"
      />

      <div className="container">
        <div className="page">
          <Filter data={filters} />
          <Products data={products} />
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
