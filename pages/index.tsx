import { Filter } from '@/components/filter'
import { Products } from '@/components/products'
import { Head } from '@/components/head'
import { ProductService } from '@/api/ProductService'
import { API_URL } from '@/api/config'

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

export async function getServerSideProps({ resolvedUrl }) {
  const data = await ProductService.getProducts(`${API_URL}${resolvedUrl}`)

  return {
    props: { data },
  }
}

export default Page
