import 'styles/global.css'
import 'styles/normalize.css'

import { NextPage } from 'next'
import { DefaultSeo } from 'next-seo'
import { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => (
  <>
    <DefaultSeo
      titleTemplate="タンゴ | %s"
      defaultTitle="タンゴ"
      description="タンゴはnus3が英語を習慣的に覚えるための英単語クイズのアプリです"
    />
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  </>
)

export default MyApp
