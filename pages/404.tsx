import { FC } from 'react'

import { ErrorPage } from '@/screens/error-page'

const Error: FC = () => {
  return (
    <ErrorPage
      code={'404'}
      title={'Страницы не существует'}
    />
  )
}

export default Error
