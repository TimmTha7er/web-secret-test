import { ErrorPage } from '@/screens/error-page'

const Error = () => {
  return (
    <ErrorPage
      code={500}
      title={'Ошибка сервера'}
    />
  )
}

export default Error
