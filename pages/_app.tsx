import type { AppProps } from 'next/app'

import '@/styles/app.scss'

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default App
