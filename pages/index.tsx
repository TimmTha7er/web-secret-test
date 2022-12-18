import { Lenses } from '@/screens/lenses'

import { ProductService } from '@/api/ProductService'

const Page = ({ data }) => {
  return <Lenses data={data} />
}

export async function getServerSideProps({ resolvedUrl }) {
  const data = await ProductService.getProducts(resolvedUrl)

  return {
    props: { data },
  }
}

export default Page
