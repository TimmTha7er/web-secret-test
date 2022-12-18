import type { AppProps } from 'next/app'

import { Font } from '@/components/font'

import '@/styles/app.scss'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Font />
      <Component {...pageProps} />
    </>
  )
}

export default App
