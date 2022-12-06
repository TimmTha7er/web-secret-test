import localFont from '@next/font/local'
import type { AppProps } from 'next/app'

import '@/styles/app.scss'

const font = localFont({
  src: [
    {
      path: '../public/fonts/montserrat/Montserrat-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/montserrat/Montserrat-Medium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/montserrat/Montserrat-Bold.woff2',
      weight: 'bold',
      style: 'normal',
    },
    {
      path: '../public/fonts/montserrat/Montserrat-Bold.woff',
      weight: 'bold',
      style: 'normal',
    },
  ],
  adjustFontFallback: 'Arial',
  display: 'swap',
  variable: '--default-font-family',
})

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <main className={font.className}>
      <Component {...pageProps} />
    </main>
  )
}

export default App
