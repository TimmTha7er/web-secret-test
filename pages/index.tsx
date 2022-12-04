import { Filter } from '@/components/filter'
import { Products } from '@/components/products'
import { Head } from '@/components/head'
import { ProductService } from '@/api/ProductService'

const Page = ({ data }) => {
  return (
    <>
      <Head />
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

export async function getServerSideProps({ res, resolvedUrl }) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )

  const data = await ProductService.getProducts(resolvedUrl)

  return {
    props: { data },
  }
}

export default Page
