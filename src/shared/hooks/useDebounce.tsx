import { useState } from 'react'

const useDebounce = (callee: (...args: string[]) => void, timeoutMs = 300) => {
  const [timeout, setTimeout] = useState<null | ReturnType<
    typeof global.setTimeout
  >>(null)

  return (...args: string[]) => {
    if (timeout) {
      clearTimeout(timeout)
    }

    const timerId = global.setTimeout(() => callee(...args), timeoutMs)

    setTimeout(timerId)
  }
}

export { useDebounce }
