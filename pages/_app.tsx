import type { AppProps } from 'next/app'

import { Font } from '@/ui/font'
import { ErrorBoundary } from '@/supports/error-boundary/error-boundary'

import '@/styles/app.scss'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Font />
      <ErrorBoundary>
        <Component {...pageProps} />
      </ErrorBoundary>
    </>
  )
}

export default App
