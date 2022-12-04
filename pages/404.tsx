import { ErrorPage } from '@/components/error-page'

const Error = () => {
  return (
    <ErrorPage
      code={404}
      title={'Страницы не существует'}
    />
  )
}

export default Error
