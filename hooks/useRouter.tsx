import { useRouter } from 'next/router'

const useCustomRouter = () => {
  const router = useRouter()

  const removeQuery = (name: string) => {
    delete router.query[name]

    router.replace({
      query: { ...router.query },
    })
  }

  const replaceQuery = (name: string, value: string) => {
    router.replace({
      query: { ...router.query, [name]: value },
    })
  }

  return {
    ...router,
    removeQuery,
    replaceQuery,
  }
}

export { useCustomRouter as useRouter }
