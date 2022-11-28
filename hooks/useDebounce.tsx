import { useState } from 'react'

const useDebounce = (callee, timeoutMs = 300) => {
  const [timeout, setTimeout] = useState<number>(0)

  return (...args) => {
    if (timeout) {
      clearTimeout(timeout)
    }

    const timerId = global.setTimeout(() => callee(...args), timeoutMs)

    setTimeout(timerId)
  }
}

export { useDebounce }
