import React, { FC } from 'react'
import { Provider } from 'react-redux'
import { AppProps } from 'next/app'

import { wrapper } from '@/store/index'

import { Font } from '@/ui/font'
import { ErrorBoundary } from '@/supports/error-boundary/error-boundary'

import '@/styles/app.scss'

const App: FC<AppProps> = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest)

  return (
    <Provider store={store}>
      <Font />
      <ErrorBoundary>
        <Component {...props.pageProps} />
      </ErrorBoundary>
    </Provider>
  )
}

export default App
