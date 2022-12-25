import { FC } from 'react'

import { Lenses } from '@/screens/lenses'

import { wrapper } from '@/store/index'
import { fetchData } from '@/store/products/products.action'

const Page: FC = () => {
  return <Lenses />
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ resolvedUrl }) => {
      await store.dispatch(fetchData(resolvedUrl))

      return {
        props: {},
      }
    }
)

export default Page
