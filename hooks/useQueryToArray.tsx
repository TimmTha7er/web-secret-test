import { useEffect } from 'react'
import { useRouter } from 'next/router'

const useQueryToArray = (queryName: string) => {
  const router = useRouter()

  useEffect(() => {
    const query = router.query[queryName]

    if (Array.isArray(query)) {
      return
    }

    router.query[queryName] = query ? [query] : []
  }, [router.asPath])
}

export { useQueryToArray }
