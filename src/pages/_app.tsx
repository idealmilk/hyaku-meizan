import Head from 'next/head'
import { SWRConfig } from 'swr'

import type { AppProps } from 'next/app'

import '@/styles/app.scss'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <SWRConfig value={
        {
          onErrorRetry: (_error, _key, _config, revalidate, { retryCount }) => {
            if (retryCount >= 5) return
            setTimeout(() => revalidate({ retryCount }), 1000)
          },
        }
      }
      >
        <Component {...pageProps} />
      </SWRConfig >
    </>
  )
}

export default App
