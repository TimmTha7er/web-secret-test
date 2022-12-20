import { useRouter } from 'next/router'

const useCustomRouter = () => {
  const router = useRouter()

  const getQueryArray = (name: string) => {
    const query = router.query[name]

    if (Array.isArray(query)) {
      return query
    }

    return query ? [query] : []
  }

  const removeQuery = (name: string) => {
    delete router.query[name]

    router.replace({
      query: { ...router.query },
    })
  }

  const replaceQuery = (name: string, value: string | string[]) => {
    router.replace({
      query: { ...router.query, [name]: value },
    })
  }

  return {
    ...router,
    removeQuery,
    replaceQuery,
    getQueryArray,
  }
}

export { useCustomRouter }
