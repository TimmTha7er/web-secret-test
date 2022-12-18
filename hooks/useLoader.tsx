import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const useLoader = () => {
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      setLoading(true)
    })

    router.events.on('routeChangeComplete', () => {
      setLoading(false)
    })

    router.events.on('routeChangeError', () => {
      setLoading(false)
    })

    setLoading(false)
  }, [])

  return loading
}

export { useLoader }
