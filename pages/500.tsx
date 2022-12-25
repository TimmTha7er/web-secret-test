import { FC } from 'react'

import { ErrorPage } from '@/screens/error-page'

const Error: FC = () => {
  return (
    <ErrorPage
      code={'500'}
      title={'Ошибка сервера'}
    />
  )
}

export default Error
