import { ErrorPage } from '@/components/error-page'

const Error = () => {
  return (
    <ErrorPage
      code={500}
      title={'Ошибка сервера'}
    />
  )
}

export default Error
