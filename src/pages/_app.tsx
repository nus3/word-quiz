import 'styles/global.css'
import 'styles/normalize.css'

import { NextPage } from 'next'
import { DefaultSeo } from 'next-seo'
import { AppProps } from 'next/app'

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => (
  <>
    <DefaultSeo
      titleTemplate="タンゴ | %s"
      defaultTitle="タンゴ"
      description="タンゴはnus3が英語を習慣的に覚えるための英単語クイズのアプリです"
    />
    <Component {...pageProps} />
  </>
)

export default MyApp
